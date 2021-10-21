from django.contrib import admin
from .models import FourierTransform

# Register your models here.
class FourierTransformAdmin(admin.ModelAdmin):
list_display = ('id', 'upload', 'created_at', 'title', 'description', 'sf', 'is_exclude', 'line_is_specified', 'spec_line')
  list_filter = ['created_at']
  search_fields = ['title']

admin.site.register(FourierTransform, FourierTransformAdmin)