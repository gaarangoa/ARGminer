from rest.DataBaseInterface import MongoClass as DATABASE

class DataBase(DATABASE.Mongo):
    def init(self):
        return False
