from django.shortcuts import render

from rest_framework import viewsets
from . import serializers
from . import models

class Todo(viewsets.ModelViewSet):
    serializer_class = serializers.Todo
    queryset = models.Todo.objects.all()

    def create(self, validated_data):
        return models.Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.product_category = validated_data.get("product_category", instance.product_category)
        instance.created_date = validated_data.get("created_date", instance.created_date)
        instance.available_items = validated_data.get("available_items", instance.available_items)
        
        instance.save()

        return instance