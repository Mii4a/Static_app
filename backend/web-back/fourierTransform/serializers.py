from rest_framework import serializers
from .models import FourierTransform

class FourierTransformSerializer(serializers.ModelSerializer):
  class Meta():
    model = FourierTransform
    fields = ('id', 'upload', 'title', 'description', 'created_at', 'sf', 'is_excluded', 'line_is_specified', 'spec_line') 