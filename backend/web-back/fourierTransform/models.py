from django.db import models


# Create your models here.
class FourierTransform(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  
  title = models.CharField(max_length=100, null=True, blank=True)
  description = models.TextField(blank=True, null=True)
  sf = models.PositiveIntegerField(blank=False, null=False, default=500)
  is_excluded = models.BooleanField("exclude_10s", default=True)
  line_is_specified = models.BooleanField("line_is_specified", default=False)
  spec_line = models.PositiveIntegerField(blank=True, null=True)