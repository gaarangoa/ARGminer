from flask import Flask, jsonify, request
import json
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify(message = "ARG-inspect API")


