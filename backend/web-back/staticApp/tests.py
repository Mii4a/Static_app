from django.test import TestCase
from .models import User

# Create your tests here.

class UserModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
      User.objects.create(username="test user", email="example123@user.com")