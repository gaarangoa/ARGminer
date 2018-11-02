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

    def push(self, user_id='', post_id='', key=''):
        return self.user.push(user_id, key, {"_id": post_id, "status": True})

    def remove_post_from_list(self, post_id='', user_id=''):
        value = [i for i in self.user.get_by_id(
            user_id)[0]["posts"] if i['_id'] != post_id]
        return self.user.update("posts", value, user_id)

    def sum(self, user_id='', key=''):
        value = self.user.get_by_id(user_id)[0][key]+1
        return self.user.update(key, value, user_id)
