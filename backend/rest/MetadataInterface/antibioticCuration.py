from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class Curate():
    def __init__(self):
        self.database = DataBase()
        self.type = 'curation'

    def insert(self, data):
        types = self.database.insert(self.type, data)    
        # print gene
        return types
