# Manual del Proyecto – Auxilium Fundación Web

## 1. Resumen del proyecto
Auxilium Fundación Web es la web corporativa de la asociación Auxilium. El sistema permite mostrar información institucional y gestionar noticias/proyectos desde un panel de administración.

## 2. Arquitectura y tecnologías
- **Frontend**: React 19 + Vite 8
- **Backend**: Django 6.0.3
- **Servidor backend**: Gunicorn
- **Base de datos**: SQLite
- **Archivos estáticos**: WhiteNoise
- **Despliegue**: Docker Compose + Nginx (frontend) + Nginx Proxy Manager

## 3. Estructura del repositorio
- `/home/runner/work/AuxiliumFundacionWeb/AuxiliumFundacionWeb/README.md`
- `/home/runner/work/AuxiliumFundacionWeb/AuxiliumFundacionWeb/docker-compose.yml`
- `/home/runner/work/AuxiliumFundacionWeb/AuxiliumFundacionWeb/AuxilliumWeb/` (backend Django)
- `/home/runner/work/AuxiliumFundacionWeb/AuxiliumFundacionWeb/AuxilliumWeb/frontend/auxilium-web/` (frontend React)

## 4. Funcionalidades públicas
Rutas principales de la web:
- `/` Inicio
- `/about-us` Quiénes somos
- `/projects` Proyectos
- `/impact` Impacto
- `/transparency` Transparencia
- `/news/page/:page` Noticias
- `/news/:slug` Detalle de noticia
- `/contact` Contacto
- `/colaborators` Colaboradores
- `/donations` Donaciones

## 5. Gestión interna (administración)
Acceso al panel:
- `/admin/`

Contenido gestionable:
1. **Noticias (`New`)**
   - Título, slug, tipo, cabecera, imagen, contenido, fecha de publicación.
2. **Proyectos (`Project`)**
   - Título, párrafo 1, imagen 1, párrafo 2, imagen 2.

## 6. API disponible
### Noticias
- `GET /api/news/`
  - Lista noticias ordenadas por fecha (descendente).
  - Filtros soportados: `type`, `start_date`, `end_date`.
  - También permite consulta puntual por `id` o `slug` como query params.
- `POST /api/news/add/`
  - Alta de noticia.
  - Campos requeridos: `title`, `slug`, `type`, `header`, `content`, `publish_date`.

### Proyectos
- `GET /api/projects/`
  - Devuelve listado de proyectos.
- `POST /api/projects/add`
  - Alta de proyecto (JSON o multipart/form-data).

## 7. Puesta en marcha con Docker
Desde:
`/home/runner/work/AuxiliumFundacionWeb/AuxiliumFundacionWeb`

Comando:
```bash
docker compose up --build
```

Servicios:
- Proxy Manager: `http://localhost:81`
- Frontend: servido por Nginx
- Backend: servicio Django detrás del proxy

## 8. Dominio y SSL
El proyecto está preparado para trabajar con dominios de `auxiliumasociacion.com` y `auxiliumasociacion.online`, con SSL gestionado desde Nginx Proxy Manager y cabeceras de proxy configuradas en Django.

## 9. Entrega de accesos
Por seguridad, las credenciales de producción **no** se incluyen en este documento.

Procedimiento de entrega recomendado:
1. Entregar credenciales por canal seguro independiente (gestor de contraseñas o enlace de un solo uso).
2. Confirmar recepción con el cliente autorizado.
3. Forzar cambio de contraseñas iniciales tras primer acceso.
4. Activar/verificar 2FA en todos los accesos donde esté disponible.
5. Mantener un inventario de accesos actualizado y restringido al personal autorizado.

## 10. Limitaciones funcionales actuales
- El formulario de contacto valida en frontend, pero actualmente no envía datos al backend.
- La página de transparencia contiene enlaces de documentación de ejemplo (`#`).
- La página de impacto incluye contenido de texto provisional.
- No existe una suite de tests funcional implementada en backend.

## 11. Operación y mantenimiento
- Realizar copias de seguridad periódicas de:
  - Base de datos `db.sqlite3`
  - Carpeta `media/`
- Mantener actualizado el contenido institucional y legal.
- Revisar periódicamente dependencias y seguridad del entorno.
