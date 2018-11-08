import json
from pymongo import MongoClient
import sys
import requests
import json
import networkx as nx
# from rest.DataBaseInterface.DataBaseClass import DataBase
import threading


class ConflictedARGs():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'master'
        self.secondaryTable = 'conflicted_genes'

    def run(self):
        G = nx.DiGraph()
        subtype = {}
        for i in self.database.find(self.table, {}):
            # make sure that the entry is not inspected. If it is already inspected, jump to the next gene.
            # try:
            #     i['entry']['inspected']
            # except:
            #     continue
            
            try:
                for j in i['besthit']['alignments']:
                    if j['bitscore'] < 50 or j['algn_len']/float(i['entry']['length']) < 0.9 or j['identity'] < 60: continue
                    if j['best_hit_database'] in ['CARD', 'ARDB']:
                        nodex = j['metadata']['subtype'].upper()
                        nodey = i['entry']['type']
                    else:
                        nodex = j['subtype'].upper()
                        nodey = i['entry']['type']
                    try:
                        G[nodex][nodey]['weight'] += 1
                        G[nodex][nodey]['gene_id'].append(i['entry']['gene_id'])
                    except:
                        G.add_edge(nodex, nodey, weight=1, gene_id=[i['entry']['gene_id']])
                    subtype[nodex] = True
            except:
                pass

            # H=nx.DiGraph( [ (u,v,d) for u,v,d in G.edges(data=True) if d ['weight']>1] )
        cg = [[i,G[i]] for i in subtype if len(G[i])>1]
        stu = self.database.delete(self.secondaryTable, {})
        for i in cg:
            self.database.insert(
                self.secondaryTable,
                {
                "subtype": i[0],
                "conflict": [{"class":k, "genes":list(set(i[1][k]['gene_id']))} for k in i[1] ]
                }
            )
    
        # return {"status": True}
    
    def runBackground(self):
        process = threading.Thread(target=self.run, args=())
        process.start()
        return {"status": True}


