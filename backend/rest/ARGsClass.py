from rest.MetadataInterface import CardClass as CARD
from rest.MetadataInterface import deepArgClass as DEEPARG
from rest.MetadataInterface import UniprotClass as UNIPROT
from rest.MetadataInterface import ArdbClass as ARDB
from rest.BestHitInterface import AlignmentsClass as ALGN
from rest.GenomesInterface import PatricClass as PATRIC
from rest.MetadataInterface import aclameClass as ACLAME

card = CARD.CARD()
deepARG = DEEPARG.DEEPARG()
uniprot = UNIPROT.UNIPROT()
ardb = ARDB.ARDB()
patric = PATRIC.PATRIC()
alignments = ALGN.alignments()
aclame = ACLAME.ACLAME()

class GENE():
    def __init__(self):
        self.info = ""
    
    def metadata(self,gene_id):
        # 1. Identify from which database is it coming -  so basically get all the info from the deepARG db
        try:
            gene_info = deepARG.getById(gene_id)[0]

            if not gene_info: return {"status":False}
            if gene_info['database'] == "CARD":
                return card.getById(gene_id)
            if gene_info['database'] == 'UNIPROT':
                return uniprot.getById(gene_id)
            if gene_info['database'] == 'ARDB':
                return ardb.getById(gene_id)
        except Exception as inst:
            return {"status":False, "error":str(inst)}

    def bestHit(self, gene_id):
        best_hit = alignments.getById(gene_id)
        return best_hit

    def pathogen(self, gene_id):
        pathg = patric.getById(gene_id)
        return pathg[0]
    
    def getARG(self, gene_id):
        status=True
        false_count = 0;
        try:
            # print gene_id
            entry = deepARG.getById(gene_id)[0]
            # print entry
        except Exception as inst:
            entry = {"status":False}
            false_count+=1
            print inst
        try:
            pathg = patric.getById(entry['gene_id'])[0]
        except:
            pathg = {"status":False}
            false_count+=1
        try:
            mtd = self.metadata(entry['gene_id'])
        except:
            mtd = {"status":False}
            false_count+=1
        try:
            bhit = self.bestHit(entry['gene_id'])
            for bh in bhit['alignments']:
                bh['metadata'] = self.metadata(bh['best_hit'])
                # bh['pathogen'] = self.pathogen(bh['best_hit'])
        except:
            bhit = {"status":False}
            false_count+=1
        
        try:
            MGEs = aclame.getById(gene_id)
        except:
            MGEs = []

        if false_count == 3: status = False

        return {
            "entry":entry,
            "pathogen":pathg,
            "metadata":mtd,
            "besthit":bhit,
            "status":status,
            "mobile": MGEs
        }

    def random(self):
        entry = deepARG.getRandomId()
        return self.getARG(entry['gene_id'])