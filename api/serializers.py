from rest_framework import serializers
from . import models

class Todo(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = ('id', 'title', 'description', 'completed')
