from django.db import models
from django_extensions.db.models import TimeStampedModel


# Create your models here.
# {
#   "id": "string",
#   "title": "string",
#   "description": "string",
#   "usage": "string",
#   "pricePerMetr": "number|null",
#   "rent": "shor|long",
#   "perHour": "number | null",
#   "fullName": "string | null",
#   "email": "string | null",
#   "booked": "boolean"
# }

# id - уникальный идентификатор, получаем из archilogic, выставляет фронт;
# title - название помещения;
# description - описание помещения (В дальнейшем это будет читать машина, в виде персонажа);
# usage - назначение помещения, берется из archilogic;
# pricePerMetr - плата за квадратный метр;
# rent - сдается на длительный или короткий срок;
# perHour - плата за час, если выбран короткий срок сдачи;
# fullName - имя арендатора;
# email - почта арендатора;
# booked - забронирован или нет;


class Space(TimeStampedModel):
    """ Space Описание: Данные по одному помещению
    """
    idExt = models.CharField('Идентификатор из archilogic', null=False, blank=False, max_length=255)
    title = models.CharField('Наименование помещения', default=None, null=True, blank=True, max_length=255)
    description = models.CharField('Описание', default=None, null=True, blank=True, max_length=1024)
    usage = models.CharField('Назначение помещения', default=None, null=True, blank=True, max_length=255)
    pricePerMetr = models.FloatField('Плата за квадратный метр', default=0, null=True, blank=True)
    rent = models.IntegerField('Признак срока сдачи', default=None, null=True, blank=True)
    perHour = models.FloatField('Плата за час', default=0, null=True, blank=True)
    fullName = models.CharField('Имя арендатора', default=None, null=True, blank=True, max_length=255)
    email = models.EmailField('Почта арендатора', default=None, null=True, blank=True)
    booked = models.BooleanField('Забронирован', default=False, null=True, blank=True)
    startRent = models.DateTimeField('Начало аренды', default=None, null=True, blank=True)
    endRent = models.DateTimeField('Завершение аренды', default=None, null=True, blank=True)
