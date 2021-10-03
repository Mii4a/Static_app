import numpy as np
from django.db import models


# Create your models here.
class FourierTransform(models.Model):
  created_at = models.DateTimeField(auto_now_add=true)
  
  title = models.CharField(max_length=100, null=True, blank=True)
  description = models.TextField(null=True, blank=True)