from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import base64
# from rest.config import add_path
# add_path
import sys
sys.path.insert(0, '')

from rest.ARGsClass import GENE
from rest.AntibioticClass import Antibiotic
from rest.AdminClass import Admin

from rest.DataBaseInterface import DataBaseClass as DB
db = DB.DataBase()

# Antibiotic resistance init
ARG = GENE(db)
ANTIBIOTIC = Antibiotic(db)
ADMIN = Admin(db)

app = Flask(__name__)
CORS(app)



@app.route('/')
def index():
    return jsonify(message = "ARG-inspect REST API")

@app.route('/get/arg/metadata/<gene_id>', methods = ['GET','POST'])
def metadata(gene_id):
    metadata = ARG.metadata(gene_id)
    return jsonify(metadata)

@app.route('/get/arg/besthit/<gene_id>', methods = ['GET','POST'])
def besthit(gene_id):
    besthit = ARG.bestHit(gene_id)
    return jsonify(besthit)

@app.route('/get/arg/pathogen/<gene_id>', methods = ['GET','POST'])
def pathogen(gene_id):
    pathogen = ARG.pathogen(gene_id)
    return jsonify(pathogen)

# For updating
@app.route('/get/arg/<gene_id>', methods = ['GET','POST'])
def getarg(gene_id):
    arg = ARG.getARG(gene_id)
    return jsonify(arg)

@app.route('/get/antibiotic/class', methods = ['GET','POST'])
def GetAntibioticClass():
    arg = ANTIBIOTIC.ListARGType()
    return jsonify(arg)

@app.route('/get/antibiotic/group', methods = ['GET','POST'])
def GetAntibioticGroup():
    arg = ANTIBIOTIC.ListARGSubtype()
    return jsonify(arg)


# For fast search
@app.route('/get/arg/random/', methods = ['GET','POST'])
def random():
    random = ARG.random()
    return jsonify(random)

@app.route('/get/subtype/random/', methods = ['GET','POST'])
def subtypeRandom():
    random = ARG.random2()
    return jsonify(random)

@app.route('/get/search/', methods = ['GET','POST'])
def search():
    keyword = request.args.get('keyword')
    index = int(request.args.get('index'))

    params = {
        "keyword":keyword,
        "index":index
    }

    arg = ARG.search(params)
    return jsonify(arg)

@app.route('/get/arg/info/<gene_id>', methods = ['GET','POST'])
def getargi(gene_id):
    arg = ARG.getMasterARG(gene_id)
    return jsonify(arg)



@app.route('/post/curation', methods = ['POST'])
def PostCuration():
    data = request.get_json()
    # data = {"info":1000}
    # print(data)
    arg = ANTIBIOTIC.insertCuration(data)
    return jsonify(arg)

# ADMIN SECTION
 
@app.route('/admin/inspect/arg/<index>', methods = ['GET','POST'])
def inspectedARG(index):
    arg = ARG.getInspectedARGs(index,int(index)+1)
    return jsonify(arg)

@app.route('/admin/inspect/search/<keyword>', methods = ['GET','POST'])
def adminSearchKeyword(keyword):
    arg = ARG.search(keyword)
    return jsonify(arg)

@app.route('/admin/update/arg/', methods = ['GET','POST'])
def updateARGAdmin():
    data = request.get_json()
    # print(data)
    arg = ARG.updateARG(data)
    return jsonify(arg)

@app.route('/admin/update/conflict/arg/', methods = ['GET','POST'])
def updateConflictingARGAdmin():
    # data = request.get_json()
    # print(data)
    arg = ARG.updateConflictedARG()
    return jsonify(arg)

@app.route('/admin/upgrade/database/', methods = ['GET','POST'])
def adminUpgradeDatabase():
    data = request.get_json()
    arg = ADMIN.upgradeDatabase(data)
    return jsonify(arg)

@app.route('/admin/login/', methods = ['GET','POST'])
def loginAdmin():
    data = request.get_json()
    arg = ADMIN.login(data)
    return jsonify(arg)


# DOWNLOAD SECTION
@app.route('/get/database/list', methods = ['GET','POST'])
def getDatabaseList():
    arg =  ARG.databaseList()
    return jsonify(arg)


if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')