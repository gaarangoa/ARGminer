# from rest.DataBaseInterface.DataBaseClass import DataBase
from rest.MetadataInterface.upgradeARGDatabaseClass import UpgradeDatabase

import hashlib

class Admin():
    def __init__(self, DataBase):
        self.info = ""
        self.table = "admin"
        self.database = DataBase
        self.upgradeDB = UpgradeDatabase(DataBase)

    def login(self, data):
        try:
            tk = self.database.find(self.table, {"email":data['email']})[0]
            data['password'] = hashlib.sha512(data['password'].encode('utf-8')).hexdigest()
            
            if tk['password'] == data['password']:
                return {"token":tk['token']}
            else:
                return {"token": False}
        except Exception as inst:
            print(inst)
            return {"token":False}
    
    def upgradeDatabase(self,data):
        return self.upgradeDB.upgrade(data)