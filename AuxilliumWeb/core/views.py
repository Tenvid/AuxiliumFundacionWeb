import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from core.models import New
from django.http import JsonResponse
from datetime import datetime

# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "core/base.html")


class IndexView(View):
    def get(self, request):
        return render(request, "core/index.html")


def get_news(request):
    if request.method == "GET":
        # Manejar solicitud de un solo objeto por 'id' o 'slug'
        new_id = request.GET.get("id")
        new_slug = request.GET.get("slug")

        if new_id or new_slug:
            try:
                if new_id:
                    new = New.objects.get(id=new_id)
                else:
                    new = New.objects.get(slug=new_slug)

                image_url = (
                    request.build_absolute_uri(new.image.url) if new.image else ""
                )

                data = {
                    "title": new.title,
                    "slug": new.slug,
                    "type": new.get_type_display(),
                    "header": new.header,
                    "image": image_url,
                    "content": new.content,  # Ahora es texto plano (Markdown)
                    "publish_date": new.publish_date,
                }
                return JsonResponse(data)
            except New.DoesNotExist:
                return JsonResponse({"error": "New not found"}, status=404)

        # Manejar solicitud de lista con filtros
        news_query = New.objects.all()
        news_type = request.GET.get("type")
        start_date_str = request.GET.get("start_date")
        end_date_str = request.GET.get("end_date")

        if news_type:
            news_query = news_query.filter(type=news_type)
        if start_date_str:
            try:
                start_date = datetime.strptime(start_date_str, "%Y-%m-%d").date()
                news_query = news_query.filter(publish_date__gte=start_date)
            except ValueError:
                pass
        if end_date_str:
            try:
                end_date = datetime.strptime(end_date_str, "%Y-%m-%d").date()
                news_query = news_query.filter(publish_date__lte=end_date)
            except ValueError:
                pass

        news = news_query.order_by("-publish_date")

        data = []
        for new in news:
            image_url = request.build_absolute_uri(new.image.url) if new.image else ""
            data.append(
                {
                    "id": new.id,
                    "title": new.title,
                    "slug": new.slug,
                    "type": new.get_type_display(),
                    "header": new.header,
                    "image": image_url,
                    "content": new.content,
                    "publish_date": new.publish_date.strftime("%Y-%m-%d"),
                }
            )

        return JsonResponse(data, safe=False)


@csrf_exempt
def add_new(request):
    if request.method == "POST":
        # Los datos del formulario multipart vienen en request.POST y request.FILES
        data = request.POST

        title = data.get("title")
        slug = data.get("slug")
        type_of_new = data.get("type")
        header = data.get("header")
        content = data.get("content")
        publish_date = data.get("publish_date")  # Corregido: no usar title

        # La imagen viene en request.FILES
        image = request.FILES.get("image")

        if not all([title, slug, type_of_new, header, content, publish_date]):
            return JsonResponse({"error": "Missing required fields"}, status=400)

        try:
            new = New.objects.create(
                title=title,
                slug=slug,
                type=type_of_new,
                header=header,
                image=image,  # Django maneja el archivo subido
                content=content,
                publish_date=publish_date,
            )

            image_url = request.build_absolute_uri(new.image.url) if new.image else ""

            return JsonResponse(
                {
                    "id": new.id,
                    "title": new.title,
                    "slug": new.slug,
                    "type": new.get_type_display(),
                    "header": new.header,
                    "image": image_url,
                    "content": new.content,
                    "publish_date": new.publish_date,
                },
                status=201,
            )
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)
