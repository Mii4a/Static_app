from django.urls import path, include
from .views import FileUploadView

urlpatterns = [
  path('files', FileUploadView.as_view())
]