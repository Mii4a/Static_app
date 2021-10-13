from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

from .serializers import FourierTransformSerializer

class FourierTransformView(APIView):
  parser_classes = (MultiPartParser, FormParser)

  def post(self, request, *args, *ksargs):
    fft_serializer = FourierTransformSerializer(data=request.data)
    if fft_serializer.is_valid():
      fft_serializer.save()
      return response(fft_serializer.data, status=status.HTTP_201_CREATED)
    else
      return response(fft_serializer.error, status=status.HTTP_400_BAD_REQUEST)
  
  def index(request):
    if request.method == "POST"