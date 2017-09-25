from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class MASTER():
    def __init__(self):
        self.database = DataBase()
        self.table = 'master'
        self.secondaryTable = 'conflicted_genes'

    def getById(self, gene_id):
        gene = self.database.find(self.table, {"entry.gene_id":gene_id})    
        # print gene
        # gene[0]['length'] = len(gene[0]['sequence'])
        return gene

    def getRandomId(self):
        gene = self.database.getRandomGene(self.table)
        # print gene
        # gene['entry']['length'] = len(gene['sequence'])
        return gene

    def getRandomConfSub(self):
        gene = self.database.getRandomGene(self.secondaryTable)
        return gene

    def getInspectedARGs(self, index, limit):
        return self.database.find(self.table, {"inspected": { "$gt": [] }}, projection={"inspected": 1, "entry": 1})[int(index):limit]