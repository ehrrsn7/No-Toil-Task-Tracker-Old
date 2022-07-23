from rest_framework import serializers
from . import models

class Todo(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = "__all__"

class FilterBible(serializers.ModelSerializer):
    class Meta:
        model = models.FilterBible
        fields = "__all__"
