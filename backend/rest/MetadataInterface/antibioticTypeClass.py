from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class Type():
    def __init__(self):
        self.database = DataBase()
        self.type = 'ARG_Type'

    def ListARGTypes(self):
        types = self.database.find(self.type, {})    
        # print gene
        return types
