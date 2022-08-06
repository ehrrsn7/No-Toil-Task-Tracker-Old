import time, json, asyncio
from channels.generic.websocket import WebsocketConsumer

from . import models

class ApiConsumer(WebsocketConsumer):

   def connect(self):
      self.accept()
      self.send(text_data="to client from todo consumer: connection successful")

   def receive(self, text_data):
      print("from client to todo consumer:", text_data)

   def model_callback(self, data):
      print("in consumers.model_callback:", data)
      self.send("hello to client from consumers.model_callback")