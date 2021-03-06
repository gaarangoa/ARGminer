import requests
import json

class UNIPROT():
    def __init__(self):
        self.info = ''
    
    def getById(self, gene_id):
        headers = {'Accept': 'application/json', 'user-agent': 'gustavo1@vt.edu'}
        r = requests.get('https://www.ebi.ac.uk/proteins/api/proteins/'+gene_id, headers=headers)
        response = json.loads(r.text)
        response['status'] = True
        if "errorMessage" in response.keys(): response['status'] = False
        return response
