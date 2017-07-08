from pymongo import MongoClient
from rest.config import MongoHost as config
import random

class Mongo():
    def __init__(self):
        self.client = MongoClient(config['hostdb'], config['hostdbport'])
        # # client.notynews.authenticate(config['hostuser'], config['hostpwd'])
        self.db = self.client.ARG
    
    def find(self, table, query):
        response = [i for i in self.db[table].find(query)]
        if not response: return {"status":False}
        response = response[0]
        response["_id"] = str(response["_id"])
        response["status"] = True
        return response
    
    def getByGeneId(self, table, gene_id):
        model = [i for i in self.db[table].find({"gene_id":gene_id})]
        if not model: return {"status":False}
        model = model[0]
        model["_id"] = str(model["_id"])
        model['status'] = True
        return model

    def getRandomGene(self, table):
        count = self.db[table].count();
        item = self.db[table].find({"inspected": { "$lt": 5 } })[random.randrange(count)]
        item["_id"] = str(item["_id"])
        item['status'] = True
        return item
    