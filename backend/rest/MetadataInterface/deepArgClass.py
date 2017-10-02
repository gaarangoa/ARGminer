# from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class DEEPARG():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'deeparg'

    def getById(self, gene_id):
        gene = self.database.getByGeneId(self.table, gene_id)    
        # print gene
        gene[0]['length'] = len(gene[0]['sequence'])
        return gene

    def getRandomId(self):
        gene = self.database.getRandomGene(self.table)
        # print gene
        gene['length'] = len(gene['sequence'])
        return gene