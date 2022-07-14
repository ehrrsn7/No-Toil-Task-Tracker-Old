from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from . import models

# Create your views here.
class Index(View):
   def get(self, request):
      return render(request, "djangoapp/index.html", context={
         # context information to be passed from django backend on page load
      })

# from heroku blog
# https://blog.heroku.com/in_deep_with_django_channels_the_future_of_real_time_apps_in_django
# def chat_room(request, label):
#    # If the room with the given label doesn't exist, automatically create it
#    # upon first visit (a la etherpad).
#    room, created = models.Room.objects.get_or_create(label=label)

#    # We want to show the last 50 messages, ordered most-recent-last
#    messages = reversed(room.messages.order_by('-timestamp')[:50])

#    return render(request, "chat/room.html", {
#       'room': room,
#       'messages': messages,
#    })