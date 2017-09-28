from rest.DataBaseInterface.DataBaseClass import DataBase

class Admin():
    def __init__(self):
        self.info = ""
        self.database = "admin"
    def login(self, data):
        try:
            tk = self.database.find(self.table, {"email":data['email']})[0]
            if tk['password'] == data['password']:
                return {"login":tk['token']}
        except:
            return {"login":False}