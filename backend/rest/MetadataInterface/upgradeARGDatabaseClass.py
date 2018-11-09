
# from rest.DataBaseInterface.DataBaseClass import DataBase
import threading
import gzip
import json
import networkx as nx
from networkx.readwrite import json_graph


class UpgradeDatabase():
    def __init__(self, DataBase):
        self.info = ""
        self.database = DataBase
        self.table = 'init'
        self.mainTable = 'master'
        self.network = nx.Graph()

    def lineage_network(self, item=[], is_inspected=False, is_potential_arg=False):

        # self.network.add_node(
        #     item['entry']['gene_id'],
        #     is_potential_arg=is_potential_arg,
        #     is_inspected=is_inspected
        # )

        # self.network.add_edge(item['entry']['gene_id'],
        #                       item['entry']['subtype'])

        if type(item['entry']['type']) == list:
            for node in item['entry']['type']:
                self.network.add_edge(item['entry']['subtype'], node)
        else:
            self.network.add_edge(
                item['entry']['subtype'], item['entry']['type'])

    def similarity_network(self, item=[]):
        try:
            for i in item['besthit']['alignments']:
                if i['coverage'] < 80 or i['identity'] < 80:
                    continue
                if item['entry']['gene_id'] == i['best_hit']:
                    continue
                self.network.add_edge(
                    item['entry']['gene_id'],
                    i['best_hit']
                )
        except Exception as e:
            pass

    def upgradeBg(self, data):
        # this will create a fasta file with the information from the database
        fo = open("/release/" + data + ".fasta", "w")
        fn = open("/release/" + data + ".needInspection.fasta", "w")
        fp = open("/release/" + data + ".conflicting.fasta", "w")
        fg = open("/release/" + data + ".graph.json", "w")
        fe = open("/release/" + data + ".edges.txt", "w")

        total_args = 0
        potential_args = 0
        inspected_args = 0
        user_inspections = 0

        for i in self.database.find(self.mainTable, {}):

            # don't save deprecated genes (duplicates)
            try:
                if i['entry']['deprecated'] == True:
                    continue
            except:
                fp.write(i['entry']['gene_id']+'\n')
                continue

            try:
                pathogenScore = str(i['entry']['pathogenScore'])
            except:
                pathogenScore = 'unknown'
            try:
                mechanism = str(i['entry']['mechanism'])
            except:
                mechanism = 'unknown'
            try:
                mgeScore = str(i['entry']['mgeScore'])
            except:
                mgeScore = 'unknown'

            if type(i['entry']['type']) == list:
                _type = str(i['entry']['type'])
            else:
                _type = str([i['entry']['type']])

            header = ">"+"|".join([
                str(i['entry']['gene_id']),
                # "score:"+str(i['entry']['score']),
                # "inspected:"+str(i['entry']['inspected']),
                _type,
                str(i['entry']['subtype']),
                mechanism,
                # "mge:"+mgeScore,
                # "pathogen:"+pathogenScore,
                # "database:"+i['entry']['database']
            ])
            sequence = str(i['entry']['sequence'])

            try:
                user_inspections += len(i['inspected'])
            except Exception as e:
                pass

            try:
                is_inspected = False
                if len(i['inspected']) > 0:
                    inspected_args += 1
                    is_inspected = True
            except:
                pass

            is_potential = False
            if i['entry']['database'] != 'UNIPROT' or i['entry']['inspected'] > 0:
                total_args += 1
                fo.write(header + "\n" + sequence + "\n")
            else:
                potential_args += 1
                fn.write(header + "\n" + sequence + "\n")
                is_potential = True

            # Build the network here!
            self.lineage_network(
                item=i,
                is_inspected=is_inspected,
                is_potential_arg=is_potential
            )

            self.similarity_network(
                item=i
            )

        fo.close()
        fn.close()
        fp.close()

        json.dump(json_graph.node_link_data(self.network, {
                  'link': 'edges', 'source': 'source', 'target': 'target'}), fg)

        for _i, _j in self.network.edges():
            fe.write(_i + "," + _j + "\n")

        fe.close()

        self.database.update(
            self.table,
            {'_id': data},
            {"$set": {
                "status": True,
                "total_args": total_args,
                "potential_args": potential_args,
                "inspected_args": inspected_args,
                "user_inspections": user_inspections,
                # "network": json_graph.node_link_data(self.network, {'link': 'edges', 'source': 'source', 'target': 'target'})
            }
            },
            True
        )

    def upgrade(self, data):
        # insert info in the database
        data['_id'] = data['version']
        try:
            self.database.insert(self.table, data)
            # create the new database
            process = threading.Thread(
                target=self.upgradeBg, args=(data['version'],))
            process.start()
            return {"status": True}
        except:
            return {"status": False, "Message": "This version already exists!"}
