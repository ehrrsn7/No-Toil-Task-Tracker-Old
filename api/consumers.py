import json, time
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from . import models

# TODO: re-implement using redis (not using it is not suitable for production)
class ApiLayer: # group
   pass

class ApiConsumer(WebsocketConsumer): # single instance
   def connect(self):
      self.room_group_name = "test"

      async_to_sync(self.channel_layer.group_add)(
         self.room_group_name,
         self.channel_name
      )

      self.accept()
   

   def receive(self, text_data):
      text_data_json = json.loads(text_data)

      async_to_sync(self.channel_layer.group_send)(
         self.room_group_name,
         {
            "type": "chat_message",
            "message": text_data_json["message"]
         }
      )

   def chat_message(self, event):
      self.send(text_data=json.dumps({
         "type": "chat",
         "message": event["message"]
      }))