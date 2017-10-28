from pymongo import MongoClient

config = {
    "hostdb": "localhost",
    # "hostdb": "mongo://mongo-server-arg-miner",
    "hostdbport": 27897,
    "database": "argpedia",
    "hostuser": "argpedia",
    "hostpwd": "AdminArgpedia2018.#"
}

client = MongoClient(config['hostdb'], config['hostdbport'])
client.argpedia.authenticate(config['hostuser'], config['hostpwd'])
db = client[config['database']]


# get all the genes that have been curated: 

data = [i for i in db.master.find({"inspected":{"$gt":[]} }) if len(i['inspected']) ]

fo=open('f1.txt','w')
for i in data:
    for j in i['inspected']:
        try:
            fo.write("\t".join([ 
                    str(j['gene_id']),
                    str(j['class']),
                    str(j['group']),
                    str(j['mechanism']),
                    str(j['token']),
                    str(j['rating']['confidence']['value']),
                    str(j['rating']['expertise']['value'])
            ])+"\n" )
        except:
            try:
                fo.write("\t".join([
                    str(j['gene_id']),
                    str(j['class']),
                    str(j['group']),
                    str(j['mechanism']),
                    '0',
                    str(j['rating']['confidence']['value']),
                    str(j['rating']['expertise']['value'])
                ])+"\n")
            except:
                pass

# last NP_290714

