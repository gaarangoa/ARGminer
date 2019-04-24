# from rest.DataBaseInterface.DataBaseClass import DataBase
from rest.MetadataInterface.upgradeARGDatabaseClass import UpgradeDatabase
from rest.MetadataInterface import masterClass as Master
import hashlib
import math
import pandas as pd


def score(group="G1", kind='group', data=[]):
    total_workers = data.shape[0]
    group_data = data[data[kind] == group]
    group_workers = group_data.shape[0]

    # majority voting
    Si = group_workers/float(total_workers)

    # Trust validation filter
    try:
        Vi = sum(group_data['vi']) / float(group_workers)
    except:
        Vi = 0

    # Expertise Confidence
    try:
        Hi = sum(group_data['ci'] * group_data['ei']) / \
            float(25 * group_workers)
    except:
        Hi = 0

    x = Si*Vi*Hi*100

    return {'score': x, 'counts': group_workers, 'majority_voting': Si, 'true_validation_filter': Vi, 'expertise_confidence': Hi}


def rescore(z):
    z_exp = [math.exp(i) for i in z]
    sum_z_exp = sum(z_exp)
    softmax = [i / sum_z_exp for i in z_exp]

    return softmax


def scorer(data=[], kind=""):
    scores = []
    categories = []
    for i in set(data[kind]):
        categories.append(i)
        scores.append(
            score(group=i, data=data, kind=kind)
        )

    rescores = rescore([i['score'] for i in scores])

    y = []
    for ix, i in enumerate(categories):
        y.append(
            {
                'kind': kind,
                'raw_score': scores[ix]['score'],
                'counts': scores[ix]['counts'],
                'majority_voting_score': scores[ix]['majority_voting'],
                'expertise_confidence_score': scores[ix]['expertise_confidence'],
                'true_validation_filter_score': scores[ix]['true_validation_filter'],
                'score': rescores[ix],
                'name': i
            }
        )
    return y


def dummy_score(kind):
    return [{
        'kind': kind,
        'raw_score': 0,
        'counts': 0,
        'majority_voting_score': 0,
        'expertise_confidence_score': 0,
        'true_validation_filter_score': 0,
        'score': 0,
        'name': 'not curated'
    }]


class Admin():
    def __init__(self, DataBase):
        self.info = ""
        self.table = "admin"
        self.database = DataBase
        self.upgradeDB = UpgradeDatabase(DataBase)
        self.master = Master.MASTER(DataBase)

    def login(self, data):
        try:
            tk = self.database.find(self.table, {"email": data['email']})[0]
            data['password'] = hashlib.sha512(
                data['password'].encode('utf-8')).hexdigest()

            if tk['password'] == data['password']:
                return {"token": tk['token']}
            else:
                return {"token": False}
        except Exception as inst:
            print(inst)
            return {"token": False}

    def upgradeDatabase(self, data):
        return self.upgradeDB.upgrade(data)

    def score(self, gene_id):
        '''
        This method computes the score for each ARG
        '''

        annotations = self.master.getById(gene_id)[0]['inspected']

        dta = []
        for i in annotations:
            try:
                dta.append({
                    'ci': i['rating']['confidence']['value'],
                    'ei': i['rating']['expertise']['value'],
                    'vi': 1,
                    'category': i['class'],
                    'group': i['group'],
                    'mechanism': i['mechanism']
                })
            except Exception as e:
                pass

        data = pd.DataFrame(dta)

        scorers = []
        for i in ['category', 'group', 'mechanism']:
            try:
                myscore = scorer(data=data, kind=i)
            except:
                myscore = dummy_score(i)

            myscore.sort(key=lambda x: x['score'], reverse=True)
            scorers.append({'scores': myscore, 'kind': i})

        return scorers
