from rest.DataBaseInterface.DataBaseClass import DataBase

class PATRIC():
    def __init__(self):
        self.info=""
        self.database = DataBase()
        self.table = 'patric_link'
    
    def getById(self, gene_id):
        return self.database.getByGeneId(self.table, gene_id)    
    