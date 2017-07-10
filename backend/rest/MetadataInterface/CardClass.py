from rest.DataBaseInterface.DataBaseClass import DataBase

class CARD():
    def __init__(self):
        self.database = DataBase()
        self.card = 'card'
        self.card_link = 'card_link'
        self.aro = 'ARO_OBO'
        
    def getById(self, gene_id):
        try:
            model = self.database.find(self.card_link, {"protein_id":gene_id})
            if not model: return {"status":False}
            # print model, gene_id
            info = self.database.find(self.card,{"model_id":model['model']})
            aros = info['ARO_category']
            comments = [ self.database.find( self.aro, { "_id": "ARO:"+aros[i]['category_aro_accession']} ) for i in aros]
            try:
                mdseq = info['model_sequences']['sequence'].keys();
                taxo = info['model_sequences']['sequence'][mdseq[0]]['NCBI_taxonomy']
            except:
                taxo = {'NCBI_taxonomy_id':'unknown', 'NCBI_taxonomy_name':'unknown'}
            return {
                'accession':info['ARO_accession'],
                'subtype':info['ARO_name'],
                'description':info['ARO_description'],
                'type': comments,
                'taxonomy': taxo,
                'status': True
            }
        except:
            return {"status":False}

