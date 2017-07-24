import sys

MongoHost = {
    "hostdb": "bench.cs.vt.edu",
    "hostdbport": 11914,
    "database": "argpedia",
    "hostuser": "argpedia",
    "hostpwd": "AdminArgpedia2018.#"
}

def add_path():
    sys.path.insert(0, '/Users/gustavoarango/Dropbox/Data/ARG/BPatterns/external/')