from rest.MetadataInterface.PostClass import Post
from rest.EmailClass import Email
import json


class Forum():
    def __init__(self, db):
        self.post = Post(db)
        self.email = Email()

    def create(self, data):
        self.email.send({
            "receiver": 'gustavo1@vt.edu',
            "subject": data['title'],
            "body": "A new post has been created: <a href='https://bench.cs.vt.edu/argminer/#/forum/selected_question;id=" +
            str(data['_id']) + "'> " +
            data['title'] + '</a>'
        })
        return self.post.create(data)

    def get_latest(self, _from, _to):
        ''' get posts by category '''
        return [i for i in self.post.latest(_from, _to)]

    def update_post(self, data):
        ''' update post title, body and tags'''
        return self.post.update_post(data)

    def get_one(self, post_id):
        return self.post.get_by_id(post_id)

    def remove_post(self, post_id):
        return self.post.remove_by_id(post_id)

    def add_comment(self, comment):
        try:
            self.email.send({
                "receiver": comment['owner_email'],
                "subject": "ARGminer | Post: "+str(comment['post_id']),
                "body": "<strong>"+comment['user']+"</strong> has commented on your post: " +
                " <a href='https://bench.cs.vt.edu/argminer/#/forum/selected_question;id=" + str(comment['post_id']) + "'> " + comment['post_id'] + '</a>' +
                "<br><u>" + comment['body'] + "</u>" +
                "<br>Sincerely,<br><strong>ARGminer Team</strong>"
            })
            del comment['owner_email']
            return {'status': True, 'comment': self.post.add_comment(comment, int(comment['post_id']))}
        except:
            return {'status': False}

    def remove_comment(self, post_id, comment_id):
        return self.post.remove_comment(post_id, comment_id)

    def remove(self, data):
        pass

    def sum_views(self, _id, key):
        value = self.post.get_by_id(_id)[0][key]+1
        return self.post.update(key, value, _id)

    def push(self, post_id='', user_id='', key=''):
        return self.post.push(post_id, key, {"_id": user_id, "status": True})
