from django.contrib import admin
from core.models import New
# Register your models here.

admin.site.register(New, admin.ModelAdmin)
