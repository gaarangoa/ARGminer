# from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class Subtype():
    def __init__(self, DataBase):
        self.database = DataBase
        self.type = 'ARG_Subtype'

    def ListARGSubtypes(self):
        types = self.database.find(self.type, {})    
        # print gene
        return types
