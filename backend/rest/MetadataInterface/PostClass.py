
class Post():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'post'

    def get_by_id(self, _id):
        item = self.database.find(self.table, {"_id": _id})
        return item

    def create(self, data):
        # here only the required fields are passed
        _post = {
            '_id': data['_id'],
            'title': data['title'],
            'tags': data['tags'],
            'body': data['body'],
            'timestamp': data['timestamp'],
            'user': data['user'],
            'institution': data['institution'],
            'email': data['email'],
            'comments_count': data['comments_count'],
            'comments': data['comments'],
            'likes': data['likes']
        }

        try:
            assert(self.database.insert(self.table, _post))
            return _post
        except Exception as e:
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
