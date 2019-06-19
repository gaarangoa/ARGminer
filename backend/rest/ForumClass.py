from rest.MetadataInterface.PostClass import Post
from rest.EmailClass import Email
import json
import logging
import sys

logger = logging.getLogger(__name__)
out_hdlr = logging.StreamHandler(sys.stdout)
out_hdlr.setFormatter(logging.Formatter('%(asctime)s %(message)s'))
out_hdlr.setLevel(logging.DEBUG)
logger.addHandler(out_hdlr)
logger.setLevel(logging.DEBUG)


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

    def get_latest(self, _from, _to, category):
        ''' get posts by category '''
        return [i for i in self.post.latest(_from, _to, category)]

    def update_post(self, data):
        ''' update post title, body and tags'''
        return self.post.update_post(data)

    def get_one(self, post_id):
        return self.post.get_by_id(post_id)

    def remove_post(self, post_id):
        return self.post.remove_by_id(post_id)

    def add_comment(self, comment):
        try:
            # get all receivers (the comment's authors, repliers)
            comments = self.post.get_by_id(int(comment['post_id']))

            users = list(set(
                [i['email'] for i in comments[0]['comments']] +
                [comment['email']] + [comment['owner_email']]
            ))

            logger.debug(users)

            for _user in users:
                self.email.send({
                    "receiver": _user,
                    "subject": "ARGminer | Post: "+str(comment['post_id']),
                    "body": "<strong>"+comment['email']+"</strong> has commented in the post: " +
                    " <a href='https://bench.cs.vt.edu/argminer/#/forum/selected_question;id=" + str(comment['post_id']) + "'> " + comments[0]['title'] + '</a>' +
                    # " by " +
                    # comments[0]['user'] +
                    "<br>" +
                    "<u>" + comment['body'] + "</u>" +
                    "<br>Sincerely,<br><strong>ARGminer Team</strong>"
                })

            del comment['owner_email']
            return {'status': True, 'comment': self.post.add_comment(comment, int(comment['post_id']))}
        except Exception as inst:
            return {'status': False, 'message': str(inst), 'body': comment}

    def remove_comment(self, post_id, comment_id):
        return self.post.remove_comment(post_id, comment_id)

    def remove(self, data):
        pass

    def sum_views(self, _id, key):
        value = self.post.get_by_id(_id)[0][key]+1
        return self.post.update(key, value, _id)

    def push(self, post_id='', user_id='', key=''):
        return self.post.push(post_id, key, {"_id": user_id, "status": True})

    def pull(self, post_id='', user_id='', key=''):
        return self.post.pull(post_id, key, {"_id": user_id, "status": False})
