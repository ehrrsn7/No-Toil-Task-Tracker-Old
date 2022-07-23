from distutils.text_file import TextFile
import json
from logging import Filter
from statistics import mode
from turtle import ondrag, stamp
from django.db import models

default_google_drive_image_url = "https://drive.google.com/file/d/1A5wF1HnsLlBA7G5zJQSZO0s8vRlgxttZ/view?usp=sharing"

# class Instructions(models.Model):
#     stamp = models.TextField(default="stamp instructions")
#     spray = models.TextField(default="spray instructions")
#     check = models.TextField(default="check instructions")

class FilterBible(models.Model):
    part_no = models.TextField(default="0000 or *000-00")
    
    actual_size = models.TextField(default="0.0\"x 0.0\"", null=True)

    # instructions = jsonfield.JSONField()
    instructions = models.TextField(null=True)

    # google_drive_image_urls = ArrayField(
    #     base_field=models.TextField(default=default_google_drive_image_url))
    google_drive_image_urls = models.TextField(default=default_google_drive_image_url)

class Todo(models.Model):
    title = models.CharField(max_length=120)
    # part_no = models.ForeignKey(to=FilterBible, null=True, on_delete=models.CASCADE)
    part_no = models.CharField(max_length=20, default="0000 or *000-00")
    quantity = models.PositiveIntegerField(default=0)
    lastModified = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
