import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from core.models import Project
# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "core/base.html")


class IndexView(View):
    def get(self, request):
        return render(request, "core/index.html")


def get_all_projects(request):
    if request.method == "GET":
        projects = Project.objects.all()
        data = []
        for project in projects:
            data.append(
                {
                    "title": project.title,
                    "paragraph_list": project.paragraph_list,
                    "image_list": project.image_list,
                }
            )
        return JsonResponse(data, safe=False)


@csrf_exempt
def add_project(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        title = data.get("title")
        paragraph_list = data.get("paragraph_list")
        image_list = data.get("image_list")

        project = Project.objects.create(
            title=title,
            paragraph_list=paragraph_list,
            image_list=image_list,
        )
        return JsonResponse(
            {
                "title": project.title,
                "paragraph_list": project.paragraph_list,
                "image_list": project.image_list,
            }
        )
