from django.contrib import admin
from core.models import New
from core.models import Project
# Register your models here.

admin.site.register(New, admin.ModelAdmin)

admin.site.register(Project, admin.ModelAdmin)
