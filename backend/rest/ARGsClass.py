from rest.MetadataInterface import CardClass as CARD
from rest.MetadataInterface import deepArgClass as DEEPARG
from rest.MetadataInterface import UniprotClass as UNIPROT
from rest.MetadataInterface import ArdbClass as ARDB
from rest.BestHitInterface import AlignmentsClass as ALGN
from rest.GenomesInterface import PatricClass as PATRIC

card = CARD.CARD()
deepARG = DEEPARG.DEEPARG()
uniprot = UNIPROT.UNIPROT()
ardb = ARDB.ARDB()
patric = PATRIC.PATRIC()
alignments = ALGN.alignments()

class GENE():
    def __init__(self):
        self.info = ""
    
    def metadata(self,gene_id):
        # 1. Identify from which database is it coming -  so basically get all the info from the deepARG db
        gene_info = deepARG.getById(gene_id)
        if not gene_info: return False
        if gene_info['database'] == "CARD":
            return card.getById(gene_id)
        if gene_info['database'] == 'UNIPROT':
            return uniprot.getById(gene_id)
        if gene_info['database'] == 'ARDB':
            return ardb.getById(gene_id)

    def bestHit(self, gene_id):
        best_hit = alignments.getById(gene_id)
        return best_hit

    def pathogen(self, gene_id):
        pathg = patric.getById(gene_id)
        return pathg
