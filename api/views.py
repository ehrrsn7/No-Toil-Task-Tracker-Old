from ast import arg
from django import views
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from rest_framework import viewsets
from . import serializers
from . import models

class Todo(viewsets.ModelViewSet):
    serializer_class = serializers.Todo
    queryset = models.Todo.objects.all()
    permission_classes = (permissions.AllowAny, )

class FilterBible(viewsets.ModelViewSet):
    serializer_class = serializers.FilterBible
    queryset = models.FilterBible.objects.all()
    permission_classes = (permissions.AllowAny, )