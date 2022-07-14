from django.db import models

# Create your models here.

# from heroku blog
# https://blog.heroku.com/in_deep_with_django_channels_the_future_of_real_time_apps_in_django
# class Room(models.Model):
#     name = models.TextField()
#     label = models.SlugField(unique=True)

# class Message(models.Model):
#     room = models.ForeignKey(Room, related_name='messages')
#     handle = models.TextField()
#     message = models.TextField()
#     timestamp = models.DateTimeField(default=timezone.now, db_index=True)