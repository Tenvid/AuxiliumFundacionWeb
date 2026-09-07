FROM python:3.13-slim

# Evita generar archivos .pyc y fuerza salida directa de logs
ENV PYTHONDONTWRITEBYTECODE=1 \
        PYTHONUNBUFFERED=1

WORKDIR /app

# Instalar dependencias base y de producción (Gunicorn + WhiteNoise)
RUN pip install --no-cache-dir --upgrade pip \
        && pip install --no-cache-dir \
        "django==6.0.3" \
        "django-cors-headers==4.9.0" \
        "pillow==12.2.0" \
        "gunicorn==23.0.0" \
        "whitenoise==6.9.0"

# Copiar el código del proyecto
COPY . .

EXPOSE 8000

# 1. Aplica migraciones pendientes
# 2. Recopila archivos estáticos para WhiteNoise/Admin
# 3. Arranca Gunicorn con 3 workers
CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py collectstatic --noinput && gunicorn AuxilliumWeb.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 60"]