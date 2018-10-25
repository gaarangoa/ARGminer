from rest.MetadataInterface.PostClass import Post


class Forum():
    def __init__(self, db):
        self.post = Post(db)

    def create(self, data):
        return self.post.create(data)

    def get_latest(self, _from, _to):
        ''' get posts by category '''
        return [i for i in self.post.latest(_from, _to)]

    def get_one(self, post_id):
        return self.post.get_by_id(post_id)

    def remove_post(self, post_id):
        return self.post.remove_by_id(post_id)

    def add_comment(self, comment):
        try:
            return {'status': True, 'comment': self.post.add_comment(comment, int(comment['post_id']))}
        except:
            return {'status': False}

    def remove_comment(self, post_id, comment_id):
        return self.post.remove_comment(post_id, comment_id)

    def remove(self, data):
        pass
