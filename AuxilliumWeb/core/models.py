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
    image = models.ImageField(upload_to="news_images/")
    content = models.TextField()
    publish_date = models.DateField()


class Project(models.Model):
    title = models.CharField(max_length=200)
    paragraph_1 = models.TextField()
    image_1 = models.ImageField(upload_to="project_images/", blank=True, null=True)
    paragraph_2 = models.TextField()
    image_2 = models.ImageField(upload_to="project_images/", blank=True, null=True)

    @property
    def paragraph_list(self):
        return [self.paragraph_1, self.paragraph_2]

    @property
    def image_list(self):
        return [
            self.image_1.url if self.image_1 else "",
            self.image_2.url if self.image_2 else "",
        ]
