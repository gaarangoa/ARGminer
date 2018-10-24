import random


class User():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'user'

    def get_by_id(self, user_id):
        item = self.database.find(self.table, {"_id": user_id})
        return item

    def create(self, data):
        # here only the required fields are passed
        _user = {
            '_id': data['_id'],
            'password': data['password'],
            'institution': data['institution'],
            'email': data['email'],
            'user': data['user'],
            'role': 1,
            'date': data['date'],
            'timestamp': data['timestamp']
        }

        try:
            assert(self.database.insert(self.table, _user))
            return {'status': True, 'message': 'User has been created', '_id': _user['_id'], 'institution': _user['institution'], 'user': _user['user'], 'role': _user['role']}
        except Exception as e:
            print(str(e))
            return {'status': False, 'message': str(e)}

    def update(self, field, value, _id):
        # update master table with the new data from the manual inspection
        update = self.database.update(
            self.table,
            {"_id": _id},
            {
                "$set": {
                    field: value
                }
            },
            True
        )

        return update
