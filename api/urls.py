from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'todo', views.Todo, 'todo')

urlpatterns = [
   path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
   path('', include(router.urls)),
]