from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class CustomUserAdmin(UserAdmin):
  list_display = list(UserAdmin.list_display) + ['custome_field']
  fieldsets = UserAdmin.fieldsets + (
    (None, {'fields': ('custom_field',)}),
  )
  add_fieldsets = UserAdmin.add_fieldsets + (
    (None, {'fields': ('custom_field',)}),
  )

admin.site.register(User, CustomUserAdmin)


