from django.shortcuts import render
from django.views import View
# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "core/base.html")


class IndexView(View):
    def get(self, request):
        return render(request, "core/index.html")
