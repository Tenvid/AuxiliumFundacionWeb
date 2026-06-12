from django.urls import path
from . import views

urlpatterns = [
    # Ruta para obtener el listado de noticias
    # Corresponde a GET /news/
    path("news/", views.get_news, name="news_list"),

    # Ruta para añadir una nueva noticia
    # Corresponde a POST /news/add/
    path("news/add/", views.add_new, name="add_new"),

    # Ruta para obtener una noticia específica por su slug
    # Corresponde a GET /news/<slug>/
    # ¡Asegúrate de que esta ruta exista si la necesitas para la vista de detalle!
    # path("news/<slug:slug>/", views.get_new_detail, name="new_detail"),

    # Si tienes una página de inicio, puedes definirla aquí
    # path("", views.home_page, name="home"),
]
