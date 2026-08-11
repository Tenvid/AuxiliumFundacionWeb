FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
        PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install --no-cache-dir --upgrade pip \
        && pip install --no-cache-dir "django==6.0.3" "django-cors-headers>=4.9.0" "pillow>=12.2.0"

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]