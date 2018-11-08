# from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class Curate():
    def __init__(self, DataBase):
        self.database = DataBase
        self.type = 'master'

    def insert(self, data):
        # try:
            status = self.database.update(
                self.type,
                {"entry.gene_id": data['gene_id']}, 
                {"$push": {"inspected": data}},
                True
            )   
            # print(data)
            return status
        # except Exception as inst:
            # print(str(inst) )
        
