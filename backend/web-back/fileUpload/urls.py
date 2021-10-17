from django.urls import path, include
from .views import FileUploadView
from . import views

urlpatterns = [
  path('files', FileUploadView.as_view(), name='file'),
]