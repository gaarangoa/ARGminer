from rest.DataBaseInterface import MongoClass as DATABASE

class DataBase(DATABASE.Mongo):
    def query(self):
        return False
