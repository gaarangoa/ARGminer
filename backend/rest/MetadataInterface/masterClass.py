# from rest.DataBaseInterface.DataBaseClass import DataBase
import random
import logging
import sys

logger = logging.getLogger(__name__)
out_hdlr = logging.StreamHandler(sys.stdout)
out_hdlr.setFormatter(logging.Formatter('%(asctime)s %(message)s'))
out_hdlr.setLevel(logging.DEBUG)
logger.addHandler(out_hdlr)
logger.setLevel(logging.DEBUG)


class MASTER():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'master'
        self.secondaryTable = 'conflicted_genes'

    def getById(self, gene_id):
        gene = self.database.find(self.table, {"entry.gene_id": gene_id})
        # print gene
        # gene[0]['length'] = len(gene[0]['sequence'])
        return gene

    def getRandomId(self):
        gene = self.database.getRandomGene(self.table)
        # print gene
        # gene['entry']['length'] = len(gene['sequence'])
        return gene

    def getRandomConfSub(self):
        gene = self.database.getRandomGene_Conflicted(self.secondaryTable)
        return gene

    def getInspectedARGs(self, index, limit):
        return self.database.find(self.table, {"$and": [{"inspected": {"$gt": []}}, {"entry.inspected": 0}]}, projection={"inspected": 1, "entry": 1})[int(index):limit]

    def updateARG(self, data):
        # update master table with the new data from the manual inspection
        update = self.database.update(
            self.table,
            {"entry.gene_id": data['gene_id']},
            {
                "$set": {
                    "entry.type": data['type'],
                    "entry.subtype": data['subtype'],
                    "entry.mechanism": data['mechanism'],
                    "entry.score": data["score"],
                    "entry.inspected": data['inspected'],
                    # "entry.mgeScore": float(data['MGEScore']),
                    # "entry.pathogenScore": float(data['pathogen_score'])
                }
            },
            True
        )

        logger.debug('UPDATED ARG: {}'.format(update))

        return update

    def deprecate(self, gene_id):
        update = self.database.update(
            self.table,
            {"entry.gene_id": gene_id},
            {
                "$set": {
                    "entry.deprecated": True
                }
            },
            True
        )

        return update
