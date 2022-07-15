from django.urls import path, re_path
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

from . import views


urlpatterns = [
   # favicon
   path('favicon.ico', RedirectView.as_view(
      url=staticfiles_storage.url('images/favicon.ico'))),

   # render views (rely on react router to render)
   re_path(r"djangoapp/.*", views.Index.as_view()),
]