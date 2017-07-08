from rest.DataBaseInterface.DataBaseClass import DataBase

class CARD():
    def __init__(self):
        self.database = DataBase()
        self.card = 'card'
        self.card_link = 'card_link'
        self.aro = 'ARO_OBO'
        
    def getById(self, gene_id):
        model = self.database.find(self.card_link, {"protein_id":gene_id})
        if not model: return {"status":False}
        info = self.database.find(self.card,{"model_id":model['model']})
        aros = info['ARO_category']
        comments = [ self.database.find( self.aro, { "_id": "ARO:"+aros[i]['category_aro_accession']} ) for i in aros]
        return {
            'accession':info['ARO_accession'],
            'subtype':info['ARO_name'],
            'description':info['ARO_description'],
            'type': comments,
            'status': True
        }

