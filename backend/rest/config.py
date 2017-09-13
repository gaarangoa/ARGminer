import sys
import os

# print(os.environ)

MongoHost = {
    "hostdb": "mongodb://"+os.environ['DB_HOST'],
    # "hostdb": "mongo://mongo-server-arg-miner",
    "hostdbport": 17863,
    "database": "argpedia",
    "hostuser": "argpedia",
    "hostpwd": "AdminArgpedia2018.#"
}

def add_path():
    # sys.path.insert(0, '/Users/gustavoarango/Dropbox/Data/ARG/BPatterns/external/')
    sys.path.insert(0, '/src/')