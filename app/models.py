from app import db
from datetime import datetime


class Contato(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data_envio = db.Column(db.DateTime, default=datetime.now)
    email = db.Column(db.String, nullable=True)
    password = db.Column(db.String, nullable=True)