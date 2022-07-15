from django.urls import path
from . import consumers

websocket_urlpatterns = [
   path('ws/djangoapp/', consumers.WSConsumer.as_asgi())
]