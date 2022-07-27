import json, time
from channels.generic.websocket import WebsocketConsumer
from . import models

# TODO: re-implement using redis (not using it is not suitable for production)
class ApiLayer: # group
   pass

class ApiConsumer(WebsocketConsumer): # single instance
   def connect(self):
      self.accept()

   def receive(self, text_data):
      print(text_data)
