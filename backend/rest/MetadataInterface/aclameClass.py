# from rest.DataBaseInterface.DataBaseClass import DataBase
import numpy as np

def color_interval(value, type):
    if type =='bitscore':
        if value < 50:
            return "red"
        if 50 <= value < 100:
            return "yellow"
        if 100 <= value < 200:
            return "green"
        if 200 <= value < 500:
            return "blue"
        if value >=500:
            return "black"
    if type == "identity" or type =="coverage":
        if value<30:
            return "red"
        if 30 <= value < 50:
            return "yellow"
        if 50 <= value < 80:
            return "green"
        if 80 <= value < 90:
            return "blue"
        if value >= 90:
            return "black"
    if type == "evalue":
        if value > 1e-5:
            return "red"
        if 1e-10 <= value < 1e-5:
            return "yellow"
        if 1e-50 <= value < 1e-10:
            return "green"
        if 1e-100 <= value < 1e-50:
            return "blue"
        if value < 1e-100:
            return "black"

class ACLAME():
    def __init__(self, DataBase):
        self.database = DataBase
        self.aclame = 'aclame'
        self.aclame_align = "aclame_arg_alignment"
    
    def getById(self, gene_id):
        try:
            genes = self.database.find(self.aclame_align, {"gene_id":gene_id})
            # return genes
            if genes[0]['status']==False: return [{"status":False}]
            data = {}
            for gene in genes:
                try:
                    data[ gene['type'] ]['count']+=1
                    # data[ gene['type'] ]['bitscore'].append(gene['bitscore'])
                    data[ gene['type'] ]['evalue'].append(gene['evalue']) 
                    data[ gene['type'] ]['bitscore'].append( gene['bitscore'] ) 
                    data[ gene['type'] ]['identity'].append( gene['identity'] )  
                    data[ gene['type'] ]['coverage'].append( gene['alignment_length'] )
                    data[ gene['type'] ]['mge_id'] = gene['mge_id']
                    data[ gene['type'] ]['type'] = gene['type'] 

                except:
                    
                    data[ gene['type'] ] = {
                        "count":1,
                        "evalue":  [ gene['evalue'] ],
                        "bitscore": [ gene['bitscore'] ],
                        'identity': [ gene['identity'] ],
                        'coverage': [ gene['alignment_length'] ],
                        'type': gene['type'],
                        'mge_id': gene['mge_id'],
                        'mge_description': self.database.find(self.aclame, {"aclame_id": gene['mge_id']})[0]['NCBI_annotation']
                    }
            try:
                DT = []
                for genex in data:
                    genex = data[genex]
                    
                    # mevalue = np.log10( genex['evalue'])
                    # if genex['evalue']==0: mevalue = np.log10( genex['evalue']
                    

                    genex['evalue'] = {
                        "mean": np.mean( genex['evalue'] ),
                        "std": np.std( genex['evalue'] ),
                        "color": color_interval( np.mean(genex['evalue']), 'evalue'),
                        # "evalue": np.mean(genex['evalue'])
                        }
                    genex['bitscore'] = {
                        "mean": round(np.mean(genex['bitscore']),2),
                        "std": round(np.std(genex['bitscore']),2),
                        "color": color_interval( np.mean(genex['bitscore']), "bitscore" )
                        }
                    genex['identity'] = {
                        "mean": round(np.mean(genex['identity']),2),
                        "std": round(np.std(genex['identity']),2),
                        "color": color_interval( np.mean(genex['identity']), "identity" )
                        }
                    genex['coverage'] = {
                        "mean": round(np.mean(genex['coverage']),2),
                        "std": round(np.std(genex['coverage']),2),
                        "color": color_interval( np.mean(genex['coverage']), "coverage" )
                        }
                    genex['status'] = True
                    DT.append(genex)
            except:
                pass

            return DT
        except:
            return [{"status":False}]

