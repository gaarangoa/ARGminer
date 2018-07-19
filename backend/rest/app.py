from flask import Flask
from flask_restplus import Api, Resource, fields
from Metadata import Metadata

app_name = 'ARGminer'
app_link = 'argminer_api'

app = Flask(__name__)
api = Api(app, version='1.0', title=app_name,
    description='A web-platform dedicated to the inspection, curation and exploration of Antibiotic Resitance Genes (ARGs)'
)

metadata = Metadata()
metadata.build(api, fields, app_link)


if __name__ == '__main__':
    app.run(debug=True)
