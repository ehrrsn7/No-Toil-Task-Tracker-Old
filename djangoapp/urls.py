from django.urls import path
from . import views

# favicon?
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

urlpatterns = [
    path('', views.Index.as_view()),
    path('Index', views.Index.as_view()),

    # favicon
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('img/favicon.ico')))

    # TODO: configure django urls to automatically map to react router paths
    # https://farhanghazi17.medium.com/configuring-react-router-with-django-urls-ba3d918e8c10
]