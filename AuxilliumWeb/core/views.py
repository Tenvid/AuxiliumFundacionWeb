from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from core.models import Project
# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "core/base.html")


class IndexView(View):
    def get(self, request):
        return render(request, "core/index.html")


def get_all_projects(request):
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
