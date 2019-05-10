from rest.MetadataInterface.UserClass import User


class LoggedUser():
    def __init__(self, db):
        self.user = User(db)

    def stats(self, user_id):
        try:
            credentials = self.user.get_by_id(user_id)[0]
            del credentials['password']
            return credentials
        except:
            return {'status': 'failed', 'role': 0, 'message': 'user does not exists'}

    def score_user(self, user_id):
        user = self.user.get_by_id(user_id)[0]
        score = 0.05*user['views'] + 0.45*len(user['inspections']) + 0.2*len(
            user['posts']) + 0.2*user['comments'] + 0.1*len(user['followers'])
        user = self.user.update("score", score, user_id)
        return user

    def get_top_score_users(self, top=5):
        return [{"user": i['_id'], "name": i['user'], "score": round(i['score'], 1), "email": i['email'], "institution": i['institution']} for i in self.user.score_sort(top=top)]

    def score(self):
        try:
            pass
        except:
            return {'status': 'failed', 'role': 0, 'message': 'user does not exists'}

    def info(self, user_email):
        try:
            credentials = self.user.get_by_email(user_email)[0]
            del credentials['password']
            return credentials
        except:
            return {'status': 'failed', 'role': 0, 'message': 'user does not exists'}

    def push(self, user_id='', post_id='', key=''):
        return self.user.push(user_id, key, {"_id": post_id, "status": True})

    def remove_post_from_list(self, post_id='', user_id=''):
        value = [i for i in self.user.get_by_id(
            user_id)[0]["posts"] if i['_id'] != post_id]
        return self.user.update("posts", value, user_id)

    def sum(self, user_id='', key=''):
        value = self.user.get_by_id(user_id)[0][key]+1
        return self.user.update(key, value, user_id)

    def change_password(self, _id="", old_password="", new_password=""):
        # validate if the password is real
        try:
            credentials = self.user.get_by_id(_id)[0]
            if credentials['password'] != old_password:
                return {'status': 'failed', 'message': 'Error old password'}
            else:
                self.user.update('password', new_password, _id)
                return {'status': 'passed', 'message': 'Password has been changed'}
        except:
            return {'status': 'failed', 'role': 0, 'message': 'user does not exists'}

    def update_profile(self, key='', value='', _id=''):
        try:
            credentials = self.user.get_by_id(_id)[0]
            self.user.update(key, value, _id)
            return {'status': 'passed', 'message': key+' has been changed'}
        except:
            return {'status': 'failed', 'role': 0, 'message': 'Error user not registered, try again later. '}
