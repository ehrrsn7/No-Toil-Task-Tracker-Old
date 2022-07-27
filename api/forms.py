from django.forms import ModelForm
from . import models

class Todo(ModelForm):
   class Meta:
      model = models.Todo
      fields = "__all__"