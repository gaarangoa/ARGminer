# from rest.DataBaseInterface.DataBaseClass import DataBase

class alignments():
    def __init__(self, DataBase):
        self.info=""
        self.database = DataBase
        self.table = self.database.db['alignments']
    
    def getById(self, gene_id):
        model = [i for i in self.table.find({"gene_id":gene_id})][0]
        if not model: return {"status":False}
        # model = model[0]
        model["_id"] = str(model["_id"])
        return model

