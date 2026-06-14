from django.urls import path
from . import views

urlpatterns = [
    # Estas rutas ahora serán /api/news/ y /api/news/<slug>/
    path("news/", views.get_news, name="news_list"),
    path("news/<slug:slug>/", views.get_news, name="news_detail"),
    path("news/add/", views.add_new, name="add_new"),
]
