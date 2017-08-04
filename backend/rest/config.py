import sys
import os

# print(os.environ)

MongoHost = {
    "hostdb": "mongodb://"+os.environ['DB_HOST'],
    "hostdbport": 27017,
    "database": "argpedia",
    "hostuser": "argpedia",
    "hostpwd": "AdminArgpedia2018.#"
}

def add_path():
    # sys.path.insert(0, '/Users/gustavoarango/Dropbox/Data/ARG/BPatterns/external/')
    sys.path.insert(0, '/src/')