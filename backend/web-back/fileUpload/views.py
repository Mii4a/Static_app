from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import FileUpload
from .serializers import FileUploadSerializer

class FileUploadView(generics.ListAPIView):
  queryset = FileUpload.objects.all()
  serializer_class = FileUploadSerializer
