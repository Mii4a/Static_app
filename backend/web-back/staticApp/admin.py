from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class CustomUserAdmin(UserAdmin):
  fieldsets = (
    (None, {'fields': ('email', 'password', 'username')}),
    ('Permissions', {'fields': ('is_staff', 'is_superuser')})
  )
  add_fieldsets = (
    (None, {
      'classes': ('wide',),
      'fields': ('email', 'password1', 'password2'),
      }),
  )
  list_display = ('email', 'is_staff')
  list_filter  = ('is_staff', 'is_superuser')

admin.site.register(User, CustomUserAdmin)


