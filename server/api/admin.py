from django.contrib import admin

# Register your models here.
from api.models import Space


@admin.register(Space)
class SpaceAdmin(admin.ModelAdmin):
    list_display = ('id', 'idExt', 'title')
