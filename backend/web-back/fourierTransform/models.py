from django.db import models
import os
import datetime
from django.core.validators import FileExtensionValidator

def dir_path_name(instance, filename):

  file_type = os.path.splitext(filename)
  date_time = datetime.datetime.now()
  date_dir = date_time.strftime('%Y/%m/%d')
  time_stamp = date_time.strftime('%H-%M-%S')
  new_filename = time_stamp + filename

  if file_type[1] == '.mat':
    path = os.path.join('mat', date_dir, new_filename)
    print('this file is .mat')
  elif file_type[1] == '.csv':
    path = os.path.join('csv', date_dir, new_filename)
    print('this file is .csv')
  return path


# Create your models here.
class FourierTransform(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  
  upload = models.FileField(upload_to=dir_path_name)
  title = models.CharField(max_length=100, null=True, blank=True)
  description = models.TextField(blank=True, null=True)
  sf = models.PositiveIntegerField(blank=False, null=False, default=500)
  is_excluded = models.BooleanField("exclude_10s", default=True)
  line_is_specified = models.BooleanField("line_is_specified", default=False)
  spec_line = models.PositiveIntegerField(blank=True, null=True)

  def file_name(self)
    path = os.path.basename(self.upload.name)
    return path