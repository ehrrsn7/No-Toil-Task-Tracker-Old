from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    part_no = models.TextField(default="0000 or *000-00")
    quantity = models.PositiveIntegerField(default=0)
    lastModified = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title