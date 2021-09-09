from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'staticAppList',
        'USER': 'mii4a',
        'PASSWORD': 'mii4a2501',
        'HOST': 'db',
        'PORT': '3306',
    }
}
