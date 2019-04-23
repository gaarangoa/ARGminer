from rest.MetadataInterface import CardClass as CARD
from rest.MetadataInterface import deepArgClass as DEEPARG
from rest.MetadataInterface import UniprotClass as UNIPROT
from rest.MetadataInterface import ArdbClass as ARDB
from rest.BestHitInterface import AlignmentsClass as ALGN
from rest.GenomesInterface import PatricClass as PATRIC
from rest.MetadataInterface import aclameClass as ACLAME
from rest.SearchInterface import SearchClass as SEARCH
from rest.MetadataInterface import masterClass as Master
from rest.MetadataInterface import conflictedARGsClass as ConflictedARGs
from rest.MetadataInterface import ArgDatabaseClass
from rest.MetadataInterface import plasmidClass
from rest.EmailClass import Email
from collections import Counter
import logging
import sys

logger = logging.getLogger(__name__)
out_hdlr = logging.StreamHandler(sys.stdout)
out_hdlr.setFormatter(logging.Formatter('%(asctime)s %(message)s'))
out_hdlr.setLevel(logging.DEBUG)
logger.addHandler(out_hdlr)
logger.setLevel(logging.DEBUG)

import json


class GENE():
    def __init__(self, db):
        self.card = CARD.CARD(db)
        self.deepARG = DEEPARG.DEEPARG(db)
        self.uniprot = UNIPROT.UNIPROT()
        self.ardb = ARDB.ARDB(db)
        self.patric = PATRIC.PATRIC(db)
        self.alignments = ALGN.alignments(db)
        self.aclame = ACLAME.ACLAME(db)
        self.Search = SEARCH.Search(db)
        self.master = Master.MASTER(db)
        self.conflictedARGs = ConflictedARGs.ConflictedARGs(db)
        self.argDatabase = ArgDatabaseClass.ArgDataBase(db)
        self.plasmid = plasmidClass.Plasmid(db)
        self.info = ""
        self.email = Email()

    def metadata(self, gene_id):
        # 1. Identify from which database is it coming -  so basically get all the info from the deepARG db
        try:
            gene_info = self.deepARG.getById(gene_id)[0]

            if not gene_info:
                return {"status": False}
            if gene_info['database'] == "CARD":
                return self.card.getById(gene_id)
            if gene_info['database'] == 'UNIPROT':
                return self.uniprot.getById(gene_id)
            if gene_info['database'] == 'ARDB':
                return self.ardb.getById(gene_id)
        except Exception as inst:
            return {"status": False, "error": str(inst)}

    def bestHit(self, gene_id):
        best_hit = self.alignments.getById(gene_id)
        return best_hit

    def pathogen(self, gene_id):
        pathg = self.patric.getById(gene_id)
        return pathg[0]

    def search(self, params):
        data = self.Search.retrieve(params['keyword'])
        return data[params['index']]
    # {
    #         "count": len(data),
    #         "ids": [i['gene_id'] for i in data if i['inspected']==0],
    #     }

    def fast_search(self, params):
        data = self.Search.retrieve(params['keyword'])

        if params['action'] == 'overall':
            try:
                _data = {}
                for i in data:

                    list_type_str = i['entry']['type']
                    if isinstance(i['entry']['type'], list):
                        list_type_str = " ".join(
                            i['entry']['type']).replace('antibiotic', '')

                    try:
                        _data[(list_type_str, i['entry']['subtype'])].append(
                            [
                                i['entry']['gene_id'],
                                i['entry']['database'],
                            ]
                        )
                    except Exception as e:
                        _data[(list_type_str, i['entry']['subtype'])] = [
                            [
                                i['entry']['gene_id'],
                                i['entry']['database'],
                            ]
                        ]

                _db_count = {}
                for item in _data:
                    _db_count[item] = [{'database': k[0], 'counts': k[1]}
                                       for k in Counter([k[1] for k in _data[item]]).items()]

                return sorted([{"type": i[0], "subtype": i[1], "count":len(_data[i]), "sequences":_data[i], "db_counts": _db_count[i]} for i in _data], key=lambda k: k['count'], reverse=True)
            except Exception as e:
                print(str(e))
                return []

    def getARG(self, gene_id):
        status = True
        false_count = 0
        try:
            # print gene_id
            entry = self.deepARG.getById(gene_id)[0]
            # print entry
        except Exception as inst:
            entry = {"status": False}
            false_count += 1
            # print inst
        try:
            pathg = self.patric.getById(entry['gene_id'])[0]
        except:
            pathg = {"status": False}
            false_count += 1
        try:
            mtd = self.metadata(entry['gene_id'])
        except:
            mtd = {"status": False}
            false_count += 1
        try:
            bhit = self.bestHit(entry['gene_id'])
            for bh in bhit['alignments']:
                bh['metadata'] = self.metadata(bh['best_hit'])
                # bh['pathogen'] = self.pathogen(bh['best_hit'])
        except:
            bhit = {"status": False}
            false_count += 1

        try:
            MGEs = self.aclame.getById(gene_id)
        except:
            MGEs = []

        if false_count == 3:
            status = False

        return {
            "entry": entry,
            "pathogen": pathg,
            "metadata": mtd,
            "besthit": bhit,
            "status": status,
            "mobile": MGEs
        }

    def random(self):
        entry = self.master.getRandomId()
        return entry

    def random2(self):
        entry = self.master.getRandomConfSub()
        return entry

    def getMasterARG(self, gene_id):
        return self.master.getById(gene_id)[0]

    def getInspectedARGs(self, index, limit):
        return self.master.getInspectedARGs(index, limit)

    def updateARG(self, data):
        # TODO: include all admins and the users who voted that gene!
        receivers = ['cmetangen@gmail.com']

        logger.debug("Curating ARG: {}".format(data['gene_id']))

        for receiver in receivers:
            self.email.send({
                "receiver": receiver,
                "subject": 'The gene ' + data['gene_id'] + ' has been curated',
                "body": "The annotation for the gene <a href=https://bench.cs.vt.edu/argminer/#/classify;gene_id="+data['gene_id']+">" + data['gene_id'] + '</a> has been accepted <br><br>' +
                "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 30%;'>" +
                "<tr style='color: #FFF; border: 1px solid #000000; text-align: left; padding: 8px; background-color: #4C4983;'><th style='border: 1px solid #000000; text-align: left; padding: 8px;'>Task</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>Label</th> <th>Score</th></tr>" +
                "<tr style='border: 1px solid #000000; text-align: left; padding: 8px; background-color: #C5C4D8;'><th style='border: 1px solid #000000; text-align: left; padding: 8px;'>Antibiotic Class</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + data['score'][0]['name'] + "</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + str(round(100*data['score'][0]['score'], 2)) + "%</th></tr>" +
                "<tr style='border: 1px solid #000000; text-align: left; padding: 8px; background-color: #C5C4D8;'><th style='border: 1px solid #000000; text-align: left; padding: 8px;'>ARG name</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + data['score'][1]['name'] + "</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + str(round(100*data['score'][1]['score'], 2)) + "%</th></tr>" +
                "<tr style='border: 1px solid #000000; text-align: left; padding: 8px; background-color: #C5C4D8;'><th style='border: 1px solid #000000; text-align: left; padding: 8px;'>ARG Mechanism</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + data['score'][2]['name'] + "</th> <th style='border: 1px solid #000000; text-align: left; padding: 8px;'>" + str(round(100 * data['score'][2]['score'], 2)) + "%</th></tr>" +
                "<br><br>Regards, <br>ARGminer team"
            })
        return self.master.updateARG(data)

    def updateConflictedARG(self):
        return self.conflictedARGs.runBackground()

    def databaseList(self):
        return self.argDatabase.list()

    def get_plasmid(self, gene_id):
        return self.plasmid.getById(gene_id)
