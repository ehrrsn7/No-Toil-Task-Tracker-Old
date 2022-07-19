# Generated by Django 4.0.6 on 2022-07-15 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_todo_lastmodified_todo_part_no'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='description',
        ),
        migrations.AddField(
            model_name='todo',
            name='quantity',
            field=models.PositiveIntegerField(default=0),
        ),
    ]