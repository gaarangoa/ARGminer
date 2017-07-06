from flask import Flask, jsonify, request
import json
import base64
from config import add_path
add_path
from rest.ARGsClass import GENE

# Antibiotic resistance init
ARG = GENE()


app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(message = "ARG-inspect REST API")

@app.route('/metadata/<gene_id>', methods = ['GET','POST'])
def metadata(gene_id):
    metadata = ARG.metadata(gene_id)
    return jsonify(metadata)

@app.route('/besthit/<gene_id>', methods = ['GET','POST'])
def besthit(gene_id):
    besthit = ARG.bestHit(gene_id)
    return jsonify(besthit)

@app.route('/pathogen/<gene_id>', methods = ['GET','POST'])
def pathogen(gene_id):
    pathogen = ARG.pathogen(gene_id)
    return jsonify(pathogen)
