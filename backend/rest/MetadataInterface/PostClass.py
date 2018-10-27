
class Post():
    def __init__(self, DataBase):
        self.database = DataBase
        self.table = 'post'

    def get_by_id(self, _id):
        item = self.database.find(self.table, {"_id": _id})
        return item

    def remove_by_id(self, _id):
        return self.database.delete(self.table, {"_id": int(_id)})

    def remove_comment(self, post_id, comment_id):
        return self.database.update(
            self.table,
            {"_id": int(post_id)},
            {"$pull":
                {"comments": {"_id": int(comment_id)}}
             },
            False
        )

    def latest(self, _from, _to):
        items = self.database.db[self.table].find().sort("_id", -1)[_from:_to]
        return items

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
            'like': data['likes'],
            'date': data['date'],
            'views': data['views'],
        }

        try:
            assert(self.database.insert(self.table, _post))
            return _post
        except Exception as e:
            return {'status': False, 'message': str(e)}

    def add_comment(self, comment, post_id):
        update = self.database.update(
            self.table,
            {"_id": post_id},
            {"$push": {"comments": comment}},
            True
        )

        # update the number of posts:
        number_posts = len(self.database.find(
            self.table, {"_id": post_id})[0]['comments'])

        # update the number of posts
        update = self.database.update(
            self.table,
            {"_id": post_id},
            {"$set": {"comments_count": number_posts}},
            True
        )

    def update_post(self, data):
        # update title
        update = self.database.update(
            self.table,
            {"_id": int(data['_id'])},
            {"$set": {
                "title": data['title'],
                "body": data['body'],
                "tags": data['tags']
            }
            },
            True
        )

        return {"status": True}

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
