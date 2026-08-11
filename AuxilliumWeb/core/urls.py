from django.urls import path
from . import views

urlpatterns = [
    # Estas rutas ahora serán /api/news/ y /api/news/<slug>/
    path("api/news/", views.get_news, name="news_list"),
    path("api/news/<slug:slug>/", views.get_news, name="news_detail"),
    path("api/news/add/", views.add_new, name="add_new"),
    path("", views.IndexView.as_view(), name="index"),
    path("api/projects/", views.get_all_projects, name="projects"),
    path("api/projects/add", views.add_project, name="add_project"),
]
