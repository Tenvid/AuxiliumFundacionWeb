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
