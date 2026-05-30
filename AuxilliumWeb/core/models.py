from django.db import models

# Create your models here.


class NewsType(models.TextChoices):
    DONACIÓN = "0"
    NUEVOPROYECTO = "1"
    ESTADOPROYECTO = "2"
    RESULTADOPROYECTO = "3"
    EVENTO = "4"
    OTROS = "5"


class New(models.Model):
    id = models.AutoField().primary_key
    title = models.CharField(max_length=100)
    slug = models.CharField(max_length=30)

    type = models.CharField(
        choices=NewsType.choices,
        default=NewsType.OTROS,
    )
    header = models.CharField(max_length=300)
    image = models.CharField()
    content = models.CharField()
    publish_date = models.DateField()
