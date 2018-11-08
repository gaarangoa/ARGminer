import requests
import threading


class Email():
    def __init__(self):
        self.provider = 'http://email_service:5000/email/'

    def run(self):
        requests.post(self.provider, json=self.data, headers=self.headers)

    def send(self, data):
        self.headers = {"Content-Type": "application/json",
                        "accept": "application/json"}
        self.data = data

        thread = threading.Thread(target=self.run, args=())
        thread.daemon = True
        thread.start()
