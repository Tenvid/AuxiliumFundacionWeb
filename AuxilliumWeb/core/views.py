from datetime import datetime
import json
from django.conf import settings
from django.http import HttpResponseNotFound, JsonResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from core.models import New, Project
# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "core/base.html")


class IndexView(View):
    def get(self, request):
        return redirect("admin:index")


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

                image_url = new.image.url if new.image else ""

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
            image_url = new.image.url if new.image else ""
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


def add_project(request):
    if request.method == "POST":
        if request.FILES:
            data = request.POST
            title = data.get("title")
            paragraph_1 = data.get("paragraph_1")
            paragraph_2 = data.get("paragraph_2", "") or ""

            image_1 = request.FILES.get("image_1")
            image_2 = request.FILES.get("image_2")
        else:
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse({"error": "Invalid JSON"}, status=400)

            title = data.get("title")
            paragraph_1 = data.get("paragraph_1")
            paragraph_2 = data.get("paragraph_2", "") or ""
            image_1 = None
            image_2 = None

        if not title or not paragraph_1:
            return JsonResponse(
                {"error": "title and paragraph_1 are required"}, status=400
            )

        project = Project.objects.create(
            title=title,
            paragraph_1=paragraph_1,
            paragraph_2=paragraph_2,
            image_1=image_1,
            image_2=image_2,
        )
        return JsonResponse(
            {
                "title": project.title,
                "paragraph_list": project.paragraph_list,
                "image_list": project.image_list,
            }
        )


def get_request_scheme_and_base_url(request):
    host = request.get_host()
    # Si viene por proxy con HTTPS, o estamos en producción, o el host es de dominio público
    is_secure = (
        request.is_secure()
        or request.headers.get("x-forwarded-proto") == "https"
        or (not settings.DEBUG and "localhost" not in host and "127.0.0.1" not in host)
    )
    scheme = "https" if is_secure else request.scheme
    return scheme, f"{scheme}://{host}"


def bot_news_detail(request, slug):
    try:
        new = New.objects.get(slug=slug)
        scheme, base_url = get_request_scheme_and_base_url(request)
        image_url = f"{base_url}{new.image.url}" if new.image else ""
        canonical_url = f"{base_url}/news/{new.slug}"
        return render(
            request,
            "core/bot_news.html",
            {
                "new": new,
                "image_url": image_url,
                "canonical_url": canonical_url,
            },
        )
    except New.DoesNotExist:
        return HttpResponseNotFound("Noticia no encontrada")


SECTIONS_METADATA = {
    "": {
        "title": "Asociación Auxilium | Donde la solidaridad se convierte en acción",
        "description": "Asociación sin ánimo de lucro dedicada a proyectos solidarios, ayuda a familias necesitadas y cooperación comunitaria.",
    },
    "projects": {
        "title": "Proyectos | Asociación Auxilium",
        "description": "Descubre los proyectos e iniciativas sociales y solidarias llevadas a cabo por la Asociación Auxilium.",
    },
    "news": {
        "title": "Noticias | Asociación Auxilium",
        "description": "Actualidad, campañas y últimas noticias sobre las actividades de la Asociación Auxilium.",
    },
    "about-us": {
        "title": "Quiénes somos | Asociación Auxilium",
        "description": "Conoce la misión, visión y valores de la Asociación Auxilium: solidaridad efectiva, transparencia, inclusión y sostenibilidad.",
    },
    "transparency": {
        "title": "Portal de Transparencia | Asociación Auxilium",
        "description": "Cuentas claras, memorias de actividad y total transparencia en la gestión de la Asociación Auxilium.",
    },
    "contact": {
        "title": "Contacto | Asociación Auxilium",
        "description": "Ponte en contacto con la Asociación Auxilium. Sede en Murcia, teléfono y formulario de contacto.",
    },
    "colaborators": {
        "title": "Colaboradores | Asociación Auxilium",
        "description": "Entidades, empresas y personas que colaboran y hacen posible la labor de la Asociación Auxilium.",
    },
    "donations": {
        "title": "Donaciones | Asociación Auxilium",
        "description": "Colabora con tu donación a la Asociación Auxilium. El importe íntegro se destina a nuestras causas y proyectos sociales.",
    },
    "impact": {
        "title": "Impacto Social | Asociación Auxilium",
        "description": "El impacto real de nuestras campañas y proyectos solidarios en la vida de las personas.",
    },
}


def bot_page_view(request, subpath=""):
    clean_path = (subpath or "").strip("/")
    parts = [p for p in clean_path.split("/") if p]

    # Si es una noticia individual (/news/<slug>), delegar a la vista detallada
    if len(parts) >= 2 and parts[0] == "news" and parts[1] != "page":
        return bot_news_detail(request, parts[1])

    section_key = parts[0] if parts else ""
    meta = SECTIONS_METADATA.get(section_key, SECTIONS_METADATA[""])

    scheme, base_url = get_request_scheme_and_base_url(request)
    canonical_url = f"{base_url}/{clean_path}" if clean_path else f"{base_url}/"
    default_image_url = (
        f"{base_url}/static/vendor/img/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
    )
    image_url = default_image_url
    items = []

    if section_key == "projects":
        projects = Project.objects.all()[:10]
        for p in projects:
            if p.image_1:
                image_url = f"{base_url}{p.image_1.url}"
                break
        items = [
            {
                "title": p.title,
                "description": (p.paragraph_1[:200] + "...")
                if len(p.paragraph_1) > 200
                else p.paragraph_1,
                "url": canonical_url,
            }
            for p in projects
        ]
    elif section_key == "news":
        news_list = New.objects.order_by("-publish_date")[:10]
        if news_list and news_list[0].image:
            image_url = f"{base_url}{news_list[0].image.url}"
        items = [
            {
                "title": n.title,
                "description": n.header,
                "url": f"{base_url}/news/{n.slug}",
            }
            for n in news_list
        ]

    return render(
        request,
        "core/bot_page.html",
        {
            "page_title": meta["title"],
            "page_description": meta["description"],
            "image_url": image_url,
            "canonical_url": canonical_url,
            "items": items,
        },
    )
