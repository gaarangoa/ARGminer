#!/usr/bin/env python3

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
from rest.UserClass import LoggedUser as User

from rest.EmailClass import Email

import logging
import sys

logger = logging.getLogger(__name__)
out_hdlr = logging.StreamHandler(sys.stdout)
out_hdlr.setFormatter(logging.Formatter('%(asctime)s %(message)s'))
out_hdlr.setLevel(logging.DEBUG)
logger.addHandler(out_hdlr)
logger.setLevel(logging.DEBUG)

# Antibiotic resistance init
ARG = GENE(db)
ANTIBIOTIC = Antibiotic(db)
ADMIN = Admin(db)
auth = Authentication(db)
forum = Forum(db)
user = User(db)
email = Email()

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

    try:
        user_id = data['user_id']
        user.push(
            user_id=user_id,
            post_id=data['annotation']['gene_id'],
            key='inspections'
        )
    except:
        pass
    arg = ANTIBIOTIC.insertCuration(data['annotation'])

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
    logger.debug("CURATING: Gene ID: {}".format(data['gene_id']))
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


@app.route('/forum/post/update/', methods=['GET', 'POST'])
def update_post():
    data = request.get_json()
    return jsonify(forum.update_post(data))


@app.route('/forum/post/get/latest/', methods=['GET', 'POST'])
def get_latest_post():
    data = request.get_json()
    _from = data['_from']
    _to = data['_to']
    category = data['category']
    return jsonify(forum.get_latest(_from, _to, category))


@app.route('/forum/post/get/one/<post_id>', methods=['GET'])
def get_one_post(post_id):
    return jsonify(forum.get_one(int(post_id)))


@app.route('/forum/post/add/comment/', methods=['POST'])
def add_one_post():
    data = request.get_json()
    return jsonify(forum.add_comment(data))


@app.route('/forum/post/remove/<post_id>', methods=['GET'])
def remove_one_post(post_id):
    # print(forum.get_one(int(post_id))[0])
    user_id = forum.get_one(int(post_id))[0]['user_id']
    user.remove_post_from_list(post_id=int(post_id), user_id=user_id)
    return jsonify(forum.remove_post(post_id))


@app.route('/forum/post/remove/comment', methods=['GET'])
def remove_one_post_comment():
    post_id = request.args.get('post_id')
    comment_id = request.args.get('comment_id')
    return jsonify(forum.remove_comment(post_id, comment_id))

# INFO


# @app.route('/database/info/', methods=['GET'])
# def get_database_info():
#     return jsonify()


# USER
@app.route('/user/stats/<user_id>', methods=['GET'])
def get_user_stats(user_id):
    return jsonify(user.stats(user_id))


@app.route('/user/info/<user_id>', methods=['GET'])
def get_user_info(user_id):
    return jsonify(user.info(user_id))


@app.route('/user/add/post/', methods=['POST'])
def user_add_post():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['post_id']
    return jsonify(user.push(user_id=user_id, post_id=post_id, key='posts'))


@app.route('/user/add/following/', methods=['POST'])
def user_add_following():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['following_id']
    # add followers of the post
    forum.push(post_id=post_id, user_id=user_id, key='followers')
    return jsonify(user.push(user_id=user_id, post_id=post_id, key='following'))


@app.route('/user/remove/following/', methods=['POST'])
def user_remove_following():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['following_id']
    # add followers of the post
    return jsonify(forum.pull(post_id=post_id, user_id=user_id, key='followers'))


@app.route('/user/add/followers/', methods=['POST'])
def user_add_follower():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['follower_id']
    return jsonify(user.push(user_id=user_id, post_id=post_id, key='followers'))


@app.route('/user/sum/comments/', methods=['POST'])
def user_sum_comments():
    data = request.get_json()
    user_id = data['user_id']
    return jsonify(user.sum(user_id=user_id, key='comments'))


@app.route('/user/sum/views/', methods=['POST'])
def user_sum_views():
    data = request.get_json()
    user_id = data['user_id']
    post_id = data['post_id']
    forum.sum_views(post_id, 'views')
    return jsonify(user.sum(user_id=user_id, key='views'))


@app.route('/user/password/update/', methods=['POST'])
def user_password_update():
    data = request.get_json()
    _id = data['_id']
    old_password = data['pass1']
    new_password = data['pass2']

    return jsonify(user.change_password(_id=_id, old_password=old_password, new_password=new_password))


@app.route('/user/info/update/', methods=['POST'])
def user_info_update():
    data = request.get_json()
    _id = data['_id']
    key = data['key']
    value = data['value']

    return jsonify(user.update_profile(_id=_id, key=key, value=value))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
