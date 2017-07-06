from rest.DataBaseInterface.DataBaseClass import DataBase

class ARDB():
    def __init__(self):
        self.database = DataBase()
        self.table = 'ardb'
    
    def getById(self, gene_id):
        return self.database.find(self.table, {"gene_id":gene_id} )

