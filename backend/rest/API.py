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

# Antibiotic resistance init
ARG = GENE()
ANTIBIOTIC = Antibiotic()

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

@app.route('/get/arg/random/', methods = ['GET','POST'])
def random():
    random = ARG.random()
    return jsonify(random)

@app.route('/get/arg/<gene_id>', methods = ['GET','POST'])
def getarg(gene_id):
    arg = ARG.getARG(gene_id)
    return jsonify(arg)

@app.route('/get/antibiotic/class', methods = ['GET','POST'])
def GetAntibioticClass():
    arg = ANTIBIOTIC.ListARGType()
    return jsonify(arg)

@app.route('/post/curation', methods = ['POST'])
def PostCuration():
    data = request.get_json()
    # data = {"info":1000}
    # print data
    arg = ANTIBIOTIC.insertCuration(data)
    return jsonify(arg)




if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')