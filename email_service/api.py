from flask import Flask
from flask_restplus import Api, Resource, fields
from flask_cors import CORS
from werkzeug.contrib.fixers import ProxyFix

from Email import Email

app = Flask(__name__)
CORS(app)
app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app, version='1.0', title='Send Email API',
          description='A simple microservice to send emails. The setup of sender credentials have to be placed into the credentials.py file. Then a simple post request is enough.',
          )

ns = api.namespace('email', description='Send email using a simple form')

email_model = api.model('Email', {
    'receiver': fields.String(readOnly=True, description='email addres to send message', example='gustavo1@vt.edu'),
    'subject': fields.String(readOnly=True, description='subject of the email', example='this is a test'),
    'body': fields.String(required=True, description='Body of the email', example='as title')
})

email_model_sent = api.model('EmailSent', {
    'status': fields.Boolean(readOnly=True, default=False, description='status reponse of email beins sent, it can be true or false')
})

email = Email()


@ns.route('/')
class SendEmail(Resource):
    '''Send an email to the address specified'''

    @ns.doc('send_email')
    @ns.expect(email_model)
    @ns.marshal_with(email_model_sent, code=201)
    def post(self):
        '''send an email'''
        return email.send(api.payload), 201


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
