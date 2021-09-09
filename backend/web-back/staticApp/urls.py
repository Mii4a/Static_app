from django.urls import path, include
from .views import UserView, DetailedUserView

urlpatterms = [
  path('<int:pk>/', DetailedUserView.as_view())
  path('', UserView.as_view()
]