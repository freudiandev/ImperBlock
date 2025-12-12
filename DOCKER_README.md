# Guía de Docker — ImperBlock Landing

Esta guía explica cómo usar Docker y Docker Compose para ejecutar el proyecto ImperBlock en contenedores.

---

## 📦 Requisitos Previos

- **Docker** instalado (versión 20.10 o superior)
- **Docker Compose** instalado (versión 2.0 o superior)

### Instalar Docker en Linux (Ubuntu/Debian)

```bash
# Actualizar paquetes
sudo apt update

# Instalar Docker
sudo apt install docker.io docker-compose -y

# Agregar usuario al grupo docker (evita usar sudo)
sudo usermod -aG docker $USER

# Reiniciar sesión para aplicar cambios
```

### Verificar Instalación

```bash
docker --version
docker-compose --version
```

---

## 🚀 Uso Rápido

### Opción 1: Docker Compose (Recomendado)

#### Modo Desarrollo
```bash
# Levantar contenedor de desarrollo
docker-compose up imperblock-dev

# El servidor estará disponible en:
# http://localhost:3001
```

#### Modo Producción
```bash
# Construir y levantar contenedor de producción
docker-compose up imperblock --build

# El servidor estará disponible en:
# http://localhost:3000
```

#### Detener Contenedores
```bash
# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v
```

### Opción 2: Docker Manual

#### Construir Imagen
```bash
# Construir imagen de producción
docker build -t imperblock:latest .

# Ver imágenes disponibles
docker images
```

#### Ejecutar Contenedor
```bash
# Ejecutar en modo producción
docker run -d \
  --name imperblock-app \
  -p 3000:3000 \
  imperblock:latest

# Ver logs
docker logs -f imperblock-app

# Detener contenedor
docker stop imperblock-app

# Eliminar contenedor
docker rm imperblock-app
```

---

## 📁 Archivos de Configuración

### Dockerfile

El Dockerfile usa **multi-stage build** para optimizar el tamaño de la imagen:

```dockerfile
# Etapa 1: deps - Instala dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Etapa 2: builder - Construye la aplicación
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: runner - Imagen final de producción
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
CMD ["node", "server.js"]
```

**Ventajas:**
- ✅ Imagen final pequeña (~150MB)
- ✅ Sin dependencias de desarrollo
- ✅ Optimizada para producción

### docker-compose.yml

Define dos servicios:

```yaml
services:
  # Servicio de producción (puerto 3000)
  imperblock:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped

  # Servicio de desarrollo (puerto 3001)
  imperblock-dev:
    image: node:20-alpine
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3001:3000"
    command: sh -c "npm install && npm run dev"
```

### .dockerignore

Excluye archivos innecesarios del contexto de Docker:

```
node_modules
.next
.git
out
dist
*.log
*.md
.env
```

**Beneficio:** Build más rápido y imagen más pequeña.

---

## 🛠️ Comandos Útiles

### Ver Contenedores Activos
```bash
docker ps
```

### Ver Todos los Contenedores
```bash
docker ps -a
```

### Ver Logs en Tiempo Real
```bash
docker logs -f <container-name>
```

### Ingresar a un Contenedor
```bash
docker exec -it <container-name> sh
```

### Limpiar Docker
```bash
# Eliminar contenedores detenidos
docker container prune

# Eliminar imágenes sin usar
docker image prune

# Eliminar todo (contenedores, imágenes, volúmenes, redes)
docker system prune -a --volumes
```

---

## 🔧 Variables de Entorno

### Producción
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
```

### Desarrollo
```bash
NODE_ENV=development
PORT=3000
```

Para agregar variables personalizadas, crea un archivo `.env` en la raíz:

```bash
# .env
MY_VARIABLE=valor
```

Y actualiza docker-compose.yml:

```yaml
services:
  imperblock:
    env_file:
      - .env
```

---

## 🐛 Troubleshooting

### Error: "Cannot connect to Docker daemon"

**Solución:**
```bash
# Iniciar servicio de Docker
sudo systemctl start docker

# Verificar estado
sudo systemctl status docker
```

### Error: "Port 3000 is already in use"

**Solución 1:** Cambiar el puerto en docker-compose.yml
```yaml
ports:
  - "3001:3000"  # Usar puerto 3001 en host
```

**Solución 2:** Detener proceso que usa el puerto
```bash
# Encontrar proceso
sudo lsof -i :3000

# Matar proceso
sudo kill -9 <PID>
```

### Error: "Permission denied"

**Solución:**
```bash
# Agregar usuario al grupo docker
sudo usermod -aG docker $USER

# Reiniciar sesión
```

### Contenedor se detiene inmediatamente

**Verificar logs:**
```bash
docker logs <container-name>
```

**Verificar que el build fue exitoso:**
```bash
docker build -t imperblock:latest . --progress=plain
```

---

## 🚢 Deploy con Docker

### Docker Hub

```bash
# Login
docker login

# Tag de imagen
docker tag imperblock:latest tu-usuario/imperblock:latest

# Push
docker push tu-usuario/imperblock:latest
```

### Servidor VPS

```bash
# En el servidor
git clone https://github.com/tu-usuario/ImperBlock.git
cd ImperBlock

# Construir y ejecutar
docker-compose up -d imperblock

# Ver logs
docker-compose logs -f imperblock
```

### Con Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/imperblock
server {
    listen 80;
    server_name impermeabilizacion.uio.ec;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📊 Comparación: Docker vs Local

| Aspecto | Local | Docker |
|---------|-------|--------|
| **Setup** | Requiere Node.js, npm | Solo Docker |
| **Consistencia** | Depende del sistema | Idéntico en todos lados |
| **Aislamiento** | No | Sí (contenedor) |
| **Portabilidad** | Media | Alta |
| **Recursos** | Menos | Más (overhead de Docker) |
| **Desarrollo** | Más rápido (hot reload) | Puede ser más lento |
| **Producción** | Requiere configuración | Listo para usar |

**Recomendación:**
- 💻 **Desarrollo local:** Más ágil para cambios rápidos
- 🐳 **Docker:** Mejor para producción y CI/CD

---

## 🎯 Próximos Pasos

1. ✅ Servidor corriendo en http://localhost:3000
2. 📝 Modificar código en `pages/` y ver cambios en tiempo real
3. 🎨 Ajustar estilos en `styles/globals.css`
4. 🖼️ Agregar imágenes en `public/images/`
5. 🚀 Build de producción: `docker build -t imperblock:latest .`

---

## 📚 Referencias

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Next.js with Docker](https://nextjs.org/docs/deployment#docker-image)

---

**Creado:** 12 de diciembre de 2025  
**Versión:** 1.0
