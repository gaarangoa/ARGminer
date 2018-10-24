from rest.MetadataInterface.PostClass import Post


class Forum():
    def __init__(self, db):
        self.post = Post(db)

    def create(self, data):
        return self.post.create(data)

    def remove(self, data):
        pass
