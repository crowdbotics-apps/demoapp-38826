from django.conf import settings
from django.db import models
class Event(models.Model):
    'Generated Model'
    name = models.BigIntegerField()
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)
