from rest_framework import serializers
from .models import FourierTransform as fft

class FourierTransformSerializer(serializers.ModelSerializer):
  class Meta():
    model = fft
    fields = ('title', 'description', 'created_at') 