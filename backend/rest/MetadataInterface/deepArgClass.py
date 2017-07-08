from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class DEEPARG():
    def __init__(self):
        self.database = DataBase()
        self.table = 'deeparg'

    def getById(self, gene_id):
        return self.database.getByGeneId(self.table, gene_id)    

    def getRandomId(self):
        return self.database.getRandomGene(self.table)