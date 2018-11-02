import credentials
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from smtplib import SMTP
from email.header import Header
from email.utils import formataddr
import smtplib


class Email(object):
    def __init__(self):
        self.sender = credentials.sender
        self.password = credentials.password

    def send(self, data):
        self.msg = MIMEMultipart()
        self.msg['Subject'] = data['subject']
        self.msg['From'] = formataddr(
            (str(Header('ARGminer', 'utf-8')), 'cmetangen@gmail.com')
        )
        self.msg['To'] = data['receiver']
        self.msg.preamble = 'Multipart message.\n'
        part = MIMEText(data['body'], 'html')
        self.msg.attach(part)

        s = smtplib.SMTP("smtp.gmail.com:587")
        s.ehlo()
        s.starttls()
        s.login(self.sender, self.password)

        try:
            s.sendmail(
                "cmetangen@gmail.com",
                data['receiver'],
                self.msg.as_string()
            )

            s.quit()
            return {'status': True}
        except Exception as e:
            print(str(e))
            return {'status': False}
