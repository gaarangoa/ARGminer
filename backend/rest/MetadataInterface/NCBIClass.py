import requests
import json

from Bio import Entrez


class NCBI():
    def __init__(self):
        self.info = ''
    
    def getById(self, gene_id):
        Entrez.email = "gustavo1@vt.edu"
        handle = Entrez.esearch(db="protein", id=gene_id, retmode="xml")
        records = Entrez.parse(handle)
        for record in records:
            
        headers = {'Accept': 'application/json', 'user-agent': 'gustavo1@vt.edu'}
        r = requests.get('https://www.ebi.ac.uk/proteins/api/proteins/'+gene_id, headers=headers)
        response = json.loads(r.text)
        response['status'] = True
        return response