from pymongo import MongoClient
from rest.config import MongoHost as config

class Mongo():
    def __init__(self):
        self.client = MongoClient(config['hostdb'], config['hostdbport'])
        # # client.notynews.authenticate(config['hostuser'], config['hostpwd'])
        self.db = self.client.ARG
    
    def find(self, table, query):
        response = [i for i in self.db[table].find(query)]
        if not response: return False
        response = response[0]
        response["_id"] = str(response["_id"])
        return response
    
    def getByGeneId(self, table, gene_id):
        model = [i for i in self.db[table].find({"gene_id":gene_id})]
        if not model: return False
        model = model[0]
        model["_id"] = str(model["_id"])
        return model
    