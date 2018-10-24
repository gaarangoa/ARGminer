from rest.MetadataInterface.UserClass import User


class Authentication():
    def __init__(self, db):
        self.user = User(db)

    def login(self, data):
        try:
            credentials = self.user.get_by_id(data['_id'])[0]
        except:
            return {'status': 'failed', 'role': 0, 'message': 'user does not exists'}

        try:
            if credentials['password'] == data['password']:
                return {
                    'status': 'logged',
                    'user': credentials['user'],
                    'institution': credentials['institution'],
                    'role': credentials['role'],
                    'email': credentials['email'],
                    'date': credentials['date'],
                    'message': 'logged in!'
                }
            else:
                return {'status': 'failed', 'role': 0, "message": "incorrect password!"}
        except:
            return {'status': 'failed', 'role': 0, "message": "incorrect credentials!"}

    def signup(self, data):
        return self.user.create(data)
