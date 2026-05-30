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


def get_new_by_id(request, new_id: int):
    if request.method == "GET":
        new = New.objects.get(id=new_id)
        data = {
            "title": new.title,
            "slug": new.slug,
            "type": new.get_type_display(),
            "header": new.header,
            "image": new.image if new.image else "",
            "content": new.content,
            "publish_date": new.publish_date,
        }
        return JsonResponse(data)


def get_all_news(request):
    if request.method == "GET":
        news_type = request.GET.get("type", None)
        start_date_str = request.GET.get("start_date", None)
        end_date_str = request.GET.get("end_date", None)

        news_query = New.objects.all()

        if news_type:
            news_query = news_query.filter(type=news_type)
        if start_date_str:
            try:
                start_date = datetime.strptime(start_date_str, "%Y-%m-%d").date()
                news_query = news_query.filter(publish_date__gte=start_date)
            except ValueError:
                pass

        # Filtrar por fecha de fin si se proporciona
        if end_date_str:
            try:
                end_date = datetime.strptime(end_date_str, "%Y-%m-%d").date()
                news_query = news_query.filter(publish_date__lte=end_date)
            except ValueError:
                pass

        news = news_query.order_by("-publish_date")

        data = list(
            news.values(
                "id",
                "title",
                "slug",
                "type",
                "header",
                "image",
                "content",
                "publish_date",
            )
        )
        for item in data:
            if item["image"]:
                new_obj = New.objects.get(id=item["id"])
                item["image"] = new_obj.image if new_obj.image else ""

        return JsonResponse(data, safe=False)


@csrf_exempt
def add_new(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        title = data.get("title")
        slug = data.get("slug")
        type_of_new = data.get("type")
        header = data.get("header")
        image = (data.get("image"),)
        content = data.get("content")
        publish_date = data.get("title")

        new = New.objects.create(
            title=title,
            slug=slug,
            type=type_of_new,
            header=header,
            image=image,
            content=content,
            publish_date=publish_date,
        )
        return JsonResponse(
            {
                "title": new.title,
                "slug": new.slug,
                "type": new.type_of_new,
                "header": new.header,
                "image": new.image,
                "content": new.content,
                "publish_date": new.publish_date,
            }
        )
