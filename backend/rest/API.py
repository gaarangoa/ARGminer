from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import base64
# from rest.config import add_path
# add_path
import sys
sys.path.insert(0, '/src/')
from rest.ARGsClass import GENE
from rest.AntibioticClass import Antibiotic
from rest.AdminClass import Admin
from NomenclatureClass import nomenclature_prediction

import fastText
ft_model = fastText.load_model('/src/nomenclature/model.ftz')

from rest.DataBaseInterface import DataBaseClass as DB
db = DB.DataBase()

from rest.AuthenticationClass import Authentication

from rest.ForumClass import Forum
# Antibiotic resistance init
ARG = GENE(db)
ANTIBIOTIC = Antibiotic(db)
ADMIN = Admin(db)
auth = Authentication(db)
forum = Forum(db)

app = Flask(__name__)
CORS(app)


@app.route('/')
def root():
    return jsonify(message="ARG-inspect REST API")


@app.route('/get/arg/metadata/<gene_id>', methods=['GET', 'POST'])
def metadata(gene_id):
    metadata = ARG.metadata(gene_id)
    return jsonify(metadata)


@app.route('/get/arg/besthit/<gene_id>', methods=['GET', 'POST'])
def besthit(gene_id):
    besthit = ARG.bestHit(gene_id)
    return jsonify(besthit)


@app.route('/get/arg/pathogen/<gene_id>', methods=['GET', 'POST'])
def pathogen(gene_id):
    pathogen = ARG.pathogen(gene_id)
    return jsonify(pathogen)

# For updating


@app.route('/get/arg/<gene_id>', methods=['GET', 'POST'])
def getarg(gene_id):
    arg = ARG.getARG(gene_id)
    return jsonify(arg)


@app.route('/get/antibiotic/class', methods=['GET', 'POST'])
def GetAntibioticClass():
    arg = ANTIBIOTIC.ListARGType()
    return jsonify(arg)


@app.route('/get/antibiotic/group', methods=['GET', 'POST'])
def GetAntibioticGroup():
    arg = ANTIBIOTIC.ListARGSubtype()
    return jsonify(arg)


# For fast search
@app.route('/get/arg/random/', methods=['GET', 'POST'])
def random():
    random = ARG.random()
    return jsonify(random)


@app.route('/get/subtype/random/', methods=['GET', 'POST'])
def subtypeRandom():
    random = ARG.random2()
    return jsonify(random)


@app.route('/get/search/', methods=['GET', 'POST'])
def search():
    keyword = request.args.get('keyword')
    index = int(request.args.get('index'))

    params = {
        "keyword": keyword,
        "index": index
    }

    arg = ARG.search(params)
    return jsonify(arg)


@app.route('/get/fast_search/', methods=['GET', 'POST'])
def fast_search():
    keyword = request.args.get('keyword')
    index = int(request.args.get('index'))
    action = request.args.get('action')

    params = {
        "keyword": keyword,
        "index": index,
        "action": action,
    }

    arg = ARG.fast_search(params)
    return jsonify(arg)


@app.route('/get/arg/info/<gene_id>', methods=['GET', 'POST'])
def getargi(gene_id):
    arg = ARG.getMasterARG(gene_id)
    return jsonify(arg)


@app.route('/post/curation', methods=['POST'])
def PostCuration():
    data = request.get_json()
    # data = {"info":1000}
    # print(data)
    arg = ANTIBIOTIC.insertCuration(data)
    return jsonify(arg)

# ADMIN SECTION


@app.route('/admin/inspect/arg/<index>', methods=['GET', 'POST'])
def inspectedARG(index):
    arg = ARG.getInspectedARGs(index, int(index)+1)
    return jsonify(arg)


@app.route('/admin/inspect/search/<keyword>', methods=['GET', 'POST'])
def adminSearchKeyword(keyword):
    arg = ARG.search(keyword)
    return jsonify(arg)


@app.route('/admin/update/arg/', methods=['GET', 'POST'])
def updateARGAdmin():
    data = request.get_json()
    # print(data)
    arg = ARG.updateARG(data)
    return jsonify(arg)


@app.route('/admin/update/conflict/arg/', methods=['GET', 'POST'])
def updateConflictingARGAdmin():
    # data = request.get_json()
    # print(data)
    arg = ARG.updateConflictedARG()
    return jsonify(arg)


@app.route('/admin/upgrade/database/', methods=['GET', 'POST'])
def adminUpgradeDatabase():
    data = request.get_json()
    arg = ADMIN.upgradeDatabase(data)
    return jsonify(arg)


@app.route('/admin/login/', methods=['GET', 'POST'])
def loginAdmin():
    data = request.get_json()
    arg = ADMIN.login(data)
    return jsonify(arg)


@app.route('/admin/score/<gene_id>', methods=['GET', 'POST'])
def scoreAdmin(gene_id):
    scores = ADMIN.score(gene_id)
    return jsonify(scores)

# DOWNLOAD SECTION


@app.route('/get/database/list', methods=['GET', 'POST'])
def getDatabaseList():
    arg = ARG.databaseList()
    return jsonify(arg)


# NOMENCLATURE PREDICTION
@app.route('/predict/nomenclature/', methods=['GET', 'POST'])
def get_nomenclature():
    data = request.get_json()
    sentence = data['sentence']
    return jsonify(nomenclature_prediction(q=sentence, ft_model=ft_model))


# PLASMIDS
@app.route('/get/plasmid/', methods=['GET', 'POST'])
def get_plasmid():
    data = request.get_json()
    gene_id = data['gene_id']
    return jsonify(ARG.get_plasmid(gene_id))


# USER section
@app.route('/auth/login/', methods=['GET', 'POST'])
def user_login():
    data = request.get_json()
    return jsonify(auth.login(data))


@app.route('/auth/signup/', methods=['GET', 'POST'])
def user_signup():
    data = request.get_json()
    return jsonify(auth.signup(data))

# FORUM section


@app.route('/forum/post/create/', methods=['GET', 'POST'])
def create_post():
    data = request.get_json()
    return jsonify(forum.create(data))


@app.route('/forum/post/get/latest/', methods=['GET', 'POST'])
def get_latest_post():
    data = request.get_json()
    _from = data['_from']
    _to = data['_to']
    return jsonify(forum.get_latest(_from, _to))


@app.route('/forum/post/get/one/<post_id>', methods=['GET'])
def get_one_post(post_id):
    return jsonify(forum.get_one(int(post_id)))


@app.route('/forum/post/add/comment/', methods=['POST'])
def add_one_post():
    data = request.get_json()
    return jsonify(forum.add_comment(data))


@app.route('/forum/post/remove/<post_id>', methods=['GET'])
def remove_one_post(post_id):
    return jsonify(forum.remove_post(post_id))


@app.route('/forum/post/remove/comment', methods=['GET'])
def remove_one_post_comment():
    post_id = request.args.get('post_id')
    comment_id = request.args.get('comment_id')
    return jsonify(forum.remove_comment(post_id, comment_id))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
