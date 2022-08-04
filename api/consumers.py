import time, json, asyncio
# from django.contrib.auth import get_user_model
from channels.generic.websocket import WebsocketConsumer, JsonWebsocketConsumer

from . import models

# TODO: note, this is a temporary placeholder for the front-end, replace
# this with the TodoConsumer below
class ApiConsumer(WebsocketConsumer): # single instance
   async def connect(self):
      self.accept()

   def receive(self, text_data):
      print(text_data)

class TodoConsumer(JsonWebsocketConsumer):
   model = models.Todo

   async def websocket_connect(self):
      print("connected")

      self.accept()

      await self.send({
         "type": "websocket.send",
         "text": "Websocket successfully connected",
      })
      await asyncio.sleep(5) # s
      await self.send({
         "type": "websocket.send",
         "text": "After 5 seconds, we're sending a websocket message and closing the connection. Bye!",
      })
      await self.send({
         "type": "websocket.close",
      })

   async def websocket_receive(self, text_data=None, **kwargs):
      print("receive")
      if text_data:
         self.receive_json(self.decode_json(text_data), **kwargs)
      else:
         raise ValueError("No text section for incoming WebSocket frame!")

   async def websocket_disconnect(self, message):
      print("disconnected", message)
