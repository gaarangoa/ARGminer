# from rest.DataBaseInterface.DataBaseClass import DataBase
import random

class Search():
    def __init__(self, DataBase):
        self.database = DataBase
        self.type = 'master'

    def retrieve(self, keyword):
        keyword = keyword.replace('(','.').replace(')','.')
        
        types = self.database.find(self.type,   {
                                                    "$or":[
                                                        {"entry.type":{"$regex":keyword, "$options":"x", "$options":"i"}},
                                                        {"entry.subtype":{"$regex":keyword, "$options":"x", "$options":"i"}},
                                                        {"entry.gene_id":{"$regex":keyword, "$options":"x", "$options":"i"}},
                                                        {"inspected": { "$elemMatch": {"token": keyword} }}
                                                    ]
                                                }); 
        # print gene
        return types
