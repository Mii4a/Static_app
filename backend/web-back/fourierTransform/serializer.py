from rest_framework import serializers
from .models import FourierTransform

class FourierTransformSerializer(serializers.ModelSerializer):
  class Meta():
    model = FourierTransform
    fields = ('title', 'description', 'created_at', 'sf') 