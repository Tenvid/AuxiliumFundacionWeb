## Docker

Para levantar el backend y el frontend en Docker:

```bash
docker compose up --build
```

URLs:

- Nginx Proxy Manager: http://localhost:81
- Frontend: servirá detrás del proxy inverso en http://localhost
- Backend: se expone internamente y se publica a través del proxy

En Nginx Proxy Manager crea un proxy host que apunte a `frontend:80` para `/` y otro destino a `backend:8000` para `/api`, `/admin`, `/static` y `/media`.

### SSL / Let's Encrypt

1. Asegúrate de que los registros DNS (`A` o `AAAA`) de `auxiliumasociacion.com` y `www.auxiliumasociacion.com` apunten a la IP pública del servidor.
2. En Nginx Proxy Manager crea un "Proxy Host" para `www.auxiliumasociacion.com` (y opcionalmente otro para `auxiliumasociacion.com`) apuntando al host `frontend:80`.
	- En la pestaña "SSL" marca "Request a new SSL certificate" y selecciona "Force SSL".
3. Actualiza la variable de entorno `DJANGO_ALLOWED_HOSTS` (ya incluida en `docker-compose.yml`) para incluir `auxiliumasociacion.com` y `www.auxiliumasociacion.com`.
4. Reinicia los servicios:

```bash
docker compose up -d --build
```

Notas:
- Nginx Proxy Manager manejará la obtención y renovación automática del certificado Let's Encrypt.
- Si usas otro método de proxy inverso, asegúrate de permitir `X-Forwarded-Host` y `X-Forwarded-Proto` y de configurar `ALLOWED_HOSTS` en Django.
