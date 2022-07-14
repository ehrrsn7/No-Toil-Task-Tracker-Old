import json
from channels.generic.websocket import WebsocketConsumer

class WSConsumer(WebsocketConsumer):
   def connect(self):
      self.accept()
      self.send(json.dumps({
         "message": 1
      }))