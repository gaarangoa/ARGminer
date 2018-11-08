
# from rest.DataBaseInterface.DataBaseClass import DataBase
import threading


class UpgradeDatabase():
    def __init__(self, DataBase):
        self.info = ""
        self.database = DataBase
        self.table = 'init'
        self.mainTable = 'master'
    
    def upgradeBg(self, data):
        # this will create a fasta file with the information from the database
        fo = open("/release/"+data+".fasta","w")
        for i in self.database.find(self.mainTable, {}):
            try:
                pathogenScore = str(i['entry']['pathogenScore'])
            except: 
                pathogenScore = '-'
            try:
                mechanism = str(i['entry']['mechanism'])
            except: 
                mechanism = '-'
            try:
                mgeScore = str(i['entry']['mgeScore'])
            except: 
                mgeScore = '-'
            
            header = ">"+"|".join([
                str(i['entry']['gene_id']),
                "score:"+str(i['entry']['score']),
                "inspected:"+str(i['entry']['inspected']),
                str(i['entry']['type']),
                str(i['entry']['subtype']),
                "mechanism:"+mechanism,
                "mge:"+mgeScore,
                "pathogen:"+pathogenScore,
                "database:"+i['entry']['database']
            ])
            sequence = str(i['entry']['sequence'])
            fo.write(header+"\n"+sequence+"\n")
            self.database.update(self.table, {'version': data}, {"$set":{"status":True}}, True)
        fo.close()

    def upgrade(self, data):
        # insert info in the database
        self.database.insert(self.table, data)
        # create the new database
        process = threading.Thread(target=self.upgradeBg, args=(data['version'],) )
        process.start()
        return {"status": True}