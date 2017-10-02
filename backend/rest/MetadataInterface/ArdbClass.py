# from rest.DataBaseInterface.DataBaseClass import DataBase

class ARDB():
    def __init__(self, DataBase):
        self.database = DataBase
        self.genes = 'ardb'
    
    def getById(self, gene_id):

        gene = self.database.find("ardb_ar_genes", {"gene_id":gene_id} )[0]
        if gene['status']==False:
            gene = self.database.find("ardb_genomeblast", {"gene_id":gene_id} )[0]
            if gene['status']==True:
                gene = self.database.find("ardb_ar_genes", {"gene_id":gene['arg_id']} )[0]
            else:
                subtype = self.database.find("ardb_abrg", {"gene_id":gene_id} )[0]
                gene = {
                    "is_redundant": "N",
                    "gene_id": gene_id,
                    "subtype": subtype["subtype"].lower(),
                    "taxonomy_id": False,
                    "gene_id_nt": False,
                    "is_complete": "N"
                }

        
        
        origin_type = self.database.find( "ardb_origin_type", {"subtype": gene['subtype']} )[0]


        if origin_type["status"]:
            gene['subtype_class'] = origin_type['subtype_class']
            
            class_info = self.database.find("ardb_class2info", { "subtype_class": origin_type['subtype_class'] })[0]

            if class_info["status"]:
                    gene['description'] = class_info['description']
            else:
                gene['description'] = False

            res_profile = self.database.find("ardb_resistance_profile", { "subtype": gene['subtype'] })
            
            gene['resistance_profile'] = []
            if res_profile[0]['status']:
                for resp in res_profile:
                    desc = self.database.find("ardb_ab2mesh", { "type": resp['type'] })[0]
                    if desc['status']: 
                        desci = desc['description']
                    else:
                        desci = False
                    gene['resistance_profile'].append({
                        "type":resp['type'],
                        "description":desci
                    })
            else:
                gene['resistance_profile'] = [{
                    "type":False,
                    "description":False
                }]

            # return gene
            pubmed = self.database.find("ardb_type2ref", { "subtype_class": gene['subtype_class'] })[0]
            # return pubmed
            if pubmed["status"]:
                gene['pubmed'] = pubmed
            else:
                gene['pubmed'] = False
            
            
            
        else:
            gene['subtype_class'] = False

        gene['status'] = True

        return gene
