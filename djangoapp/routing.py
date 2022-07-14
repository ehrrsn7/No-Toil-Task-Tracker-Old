from django.urls import path
from . import consumers

websocket_urlpatterns = [
   path('ws/counter/', consumers.WSConsumer.as_asgi())
]