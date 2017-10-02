from rest.MetadataInterface import CardClass as CARD
from rest.MetadataInterface import deepArgClass as DEEPARG
from rest.MetadataInterface import UniprotClass as UNIPROT
from rest.MetadataInterface import ArdbClass as ARDB
from rest.BestHitInterface import AlignmentsClass as ALGN
from rest.GenomesInterface import PatricClass as PATRIC
from rest.MetadataInterface import aclameClass as ACLAME
from rest.SearchInterface import SearchClass as SEARCH
from rest.MetadataInterface import masterClass as Master
from rest.MetadataInterface import conflictedARGsClass as ConflictedARGs
from rest.MetadataInterface import ArgDatabaseClass



class GENE():
    def __init__(self, db):
        self.card = CARD.CARD(db)
        self.deepARG = DEEPARG.DEEPARG(db)
        self.uniprot = UNIPROT.UNIPROT()
        self.ardb = ARDB.ARDB(db)
        self.patric = PATRIC.PATRIC(db)
        self.alignments = ALGN.alignments(db)
        self.aclame = ACLAME.ACLAME(db)
        self.Search = SEARCH.Search(db)
        self.master = Master.MASTER(db)
        self.conflictedARGs = ConflictedARGs.ConflictedARGs(db)
        self.argDatabase = ArgDatabaseClass.ArgDataBase(db)
        self.info = ""
    
    def metadata(self,gene_id):
        # 1. Identify from which database is it coming -  so basically get all the info from the deepARG db
        try:
            gene_info = self.deepARG.getById(gene_id)[0]

            if not gene_info: return {"status":False}
            if gene_info['database'] == "CARD":
                return self.card.getById(gene_id)
            if gene_info['database'] == 'UNIPROT':
                return self.uniprot.getById(gene_id)
            if gene_info['database'] == 'ARDB':
                return self.ardb.getById(gene_id)
        except Exception as inst:
            return {"status":False, "error":str(inst)}

    def bestHit(self, gene_id):
        best_hit = self.alignments.getById(gene_id)
        return best_hit

    def pathogen(self, gene_id):
        pathg = self.patric.getById(gene_id)
        return pathg[0]
    
    def search(self, params):
        data = self.Search.retrieve(params['keyword']);
        return data[params['index']]
    # {
    #         "count": len(data),
    #         "ids": [i['gene_id'] for i in data if i['inspected']==0],
    #     }
        

    def getARG(self, gene_id):
        status=True
        false_count = 0;
        try:
            # print gene_id
            entry = self.deepARG.getById(gene_id)[0]
            # print entry
        except Exception as inst:
            entry = {"status":False}
            false_count+=1
            # print inst
        try:
            pathg = self.patric.getById(entry['gene_id'])[0]
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
            MGEs = self.aclame.getById(gene_id)
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
        entry = self.master.getRandomId()
        return entry

    def random2(self):
        entry = self.master.getRandomConfSub()
        return entry

    def getMasterARG(self, gene_id):
        return self.master.getById(gene_id)[0]

    def getInspectedARGs(self, index, limit):
        return self.master.getInspectedARGs(index, limit)

    def updateARG(self, data):
        return self.master.updateARG(data)

    def updateConflictedARG(self):
        return self.conflictedARGs.runBackground()

    def databaseList(self):
        return self.argDatabase.list()