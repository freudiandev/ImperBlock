# Documentación Técnica — ImperBlock Landing

**Fecha de análisis:** 12 de diciembre de 2025  
**Versión del proyecto:** 0.1.0  
**Analista:** Documentación automatizada

---

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Componentes Principales](#componentes-principales)
6. [Flujo de Datos](#flujo-de-datos)
7. [Scripts y Automatización](#scripts-y-automatización)
8. [Sistema de Deploy](#sistema-de-deploy)
9. [Configuración](#configuración)
10. [Dependencias](#dependencias)

---

## 1. Resumen Ejecutivo

**ImperBlock** es una landing page estática desarrollada con Next.js para una empresa de impermeabilización profesional en Quito, Ecuador. El proyecto utiliza un enfoque JAMstack con exportación estática, optimizado para GitHub Pages.

### Características Principales:
- ✅ Landing page totalmente estática (SSG - Static Site Generation)
- ✅ Animación de partículas interactivas con p5.js
- ✅ Sistema de scroll reveal progresivo
- ✅ Responsive design mobile-first
- ✅ Deploy automático a GitHub Pages
- ✅ Dominio personalizado: www.impermeabilizacion.uio.ec
- ✅ SEO optimizado
- ✅ Sin dependencias de backend

---

## 2. Arquitectura del Proyecto

### 2.1 Tipo de Aplicación
- **Paradigma:** JAMstack (JavaScript, APIs, Markup)
- **Rendering:** Static Site Generation (SSG)
- **Deployment:** GitHub Pages con GitHub Actions
- **Arquitectura:** Client-side Only (No SSR, No API Routes)

### 2.2 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    DESARROLLO LOCAL                          │
│                                                               │
│  Next.js Dev Server (webpack mode)                           │
│  ├── Pages (React Components)                                │
│  ├── Components (HeroP5, ScrollReveal)                       │
│  ├── Styles (Global CSS)                                     │
│  └── Public Assets (Images)                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    npm run build
                    npm run export
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    BUILD ESTÁTICO                             │
│                                                               │
│  out/                                                         │
│  ├── index.html (Página principal)                           │
│  ├── 404.html (Página de error)                              │
│  ├── _next/static/ (JS, CSS bundles)                         │
│  ├── images/ (Assets estáticos)                              │
│  ├── CNAME (Dominio personalizado)                           │
│  └── .nojekyll (Bypass Jekyll en GH Pages)                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
                GitHub Actions (CI/CD)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  GITHUB PAGES (PRODUCCIÓN)                    │
│                                                               │
│  Branch: gh-pages                                             │
│  URL: https://impermeabilizacion.uio.ec                      │
│  Serving: Archivos estáticos del directorio out/             │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Stack Tecnológico

### 3.1 Framework Principal
- **Next.js 16.0.3**
  - Modo: Export estático (`output: 'export'`)
  - Webpack mode habilitado
  - Image optimization deshabilitada (para export estático)
  - Trailing slash habilitado

### 3.2 Bibliotecas de UI
- **React 19.2.0**
- **React DOM 19.2.0**
- **p5.js 1.9.0** (Canvas animations)

### 3.3 Herramientas de Desarrollo
- **gh-pages 6.3.0** (Deployment helper)
- **Node.js** (Scripts de automatización)

### 3.4 Fuentes
- **Google Fonts:**
  - Montserrat (700) - Sans-serif para texto
  - Merriweather (700) - Serif para headings

---

## 4. Estructura de Archivos

### 4.1 Árbol de Directorios

```
ImperBlock/
│
├── .git/                         # Control de versiones
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
│
├── components/                  # Componentes React reutilizables
│   ├── HeroP5.js               # Animación de partículas con p5.js
│   └── ScrollReveal.js         # HOC para animaciones de scroll
│
├── pages/                       # Páginas de Next.js
│   ├── _app.js                 # App wrapper global
│   └── index.js                # Página principal (landing)
│
├── styles/                      # Estilos globales
│   └── globals.css             # CSS principal (536 líneas)
│
├── public/                      # Assets estáticos
│   └── images/                 # Imágenes de proyectos
│       ├── proyecto-1.jpg
│       ├── proyecto-2.jpg
│       ├── proyecto-3.jpg
│       ├── proyecto-4.jpg
│       ├── proyecto-5.jpg
│       └── proyecto-6.jpg
│
├── out/                         # Build output (generado)
│   ├── index.html
│   ├── 404.html
│   ├── _next/static/
│   └── images/
│
├── _next/                       # Cache local de Next.js
├── images/                      # Copia de imágenes (legacy)
├── 404/                         # Legacy 404 folder
│
├── .gitignore                   # Exclusiones de Git
├── .nojekyll                    # Bypass Jekyll en GH Pages
├── CNAME                        # Dominio personalizado
├── README.md                    # Documentación de usuario
├── next.config.js               # Configuración de Next.js
├── package.json                 # Dependencias y scripts
├── package-lock.json            # Lock de versiones
├── postexport.js                # Script post-build
└── version-css.js               # Script de versionado CSS (no usado)
```

### 4.2 Descripción de Archivos Clave

#### **next.config.js**
```javascript
// Configuración para exportación estática
module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },   // Requerido para export
  trailingSlash: true,              // URLs con /
  output: 'export',                 // SSG puro
  assetPrefix: '/',                 // Dominio personalizado
  basePath: ''                      // Sin prefijo de ruta
}
```

#### **postexport.js**
- Copia `CNAME` y `.nojekyll` a la carpeta `out/` después del build
- Esencial para el correcto funcionamiento en GitHub Pages
- Ejecutado automáticamente con `npm run postexport`

#### **.github/workflows/deploy.yml**
```yaml
# CI/CD Pipeline
1. Checkout del código
2. Setup Node.js 20.x
3. npm install
4. npm run build + export
5. npm run postexport
6. Deploy a gh-pages branch
```

---

## 5. Componentes Principales

### 5.1 **pages/index.js** (Página Principal)

**Líneas de código:** ~280 líneas  
**Responsabilidad:** Layout principal de la landing

#### Secciones:
1. **Header** (Sticky Navigation)
   - Logo + Nombre de marca
   - Menú de navegación (Servicios, Proceso, Confianza, Contacto)

2. **Hero Section**
   - Componente `<HeroP5 />` (Canvas animado)
   - Badge de garantía (5 años)
   - Título principal
   - CTAs (Asesoría gratuita + Ver servicios)

3. **Servicios** (#servicios)
   - Grid de 3 cards con iconos
   - Terrazas, Tejados, Fosos/Cisternas

4. **Proceso** (#proceso)
   - 5 pasos numerados
   - Desde contacto hasta garantía

5. **Garantía** (#garantia)
   - Caja destacada con iconos
   - Lista de beneficios

6. **Galería** (#galeria)
   - Grid de 6 imágenes de proyectos
   - Lazy loading nativo de imágenes

7. **Contacto** (#contacto)
   - Teléfono: 095 978 5062
   - Ubicación: Quito Zona Norte
   - Redes sociales (Instagram, Facebook, TikTok)
   - Botón WhatsApp

8. **Blog** (#blog)
   - Link a Medium: @blockimper

9. **Valores**
   - Seriedad, Conocimiento, Responsabilidad

10. **Footer**
    - Marca + CEO (Manolo Bello)
    - Contacto + Copyright
    - Crédito: freudianDev

#### Uso de ScrollReveal:
```javascript
<ScrollReveal delay={100}>
  {/* Contenido con animación de entrada */}
</ScrollReveal>
```

---

### 5.2 **components/HeroP5.js**

**Líneas de código:** ~75 líneas  
**Biblioteca:** p5.js  
**Responsabilidad:** Animación de partículas estilo constelación

#### Configuración:
```javascript
const config = {
  count: 80,        // Número de partículas
  maxDist: 120      // Distancia máxima de conexión
}
```

#### Funcionamiento:
1. **Setup:**
   - Crea canvas responsive (windowWidth × 60vh mínimo 560px)
   - Genera 80 partículas con posiciones y velocidades aleatorias
   - Color: Naranja/Amarillo (#f39200)

2. **Draw Loop:**
   - Fondo azul oscuro (#0a1a28 aproximadamente)
   - Actualiza posiciones de partículas
   - Rebote en bordes del canvas
   - Dibuja círculos (1-3px de radio)
   - Conecta partículas cercanas con líneas (alpha dinámico)

3. **Responsive:**
   - Se redimensiona con `windowResized()`
   - Usa `pixelDensity` para pantallas retina

#### Carga Dinámica:
```javascript
// Import dinámico solo en cliente
import('p5').then((p5Module) => {
  const p5 = p5Module.default
  // Sketch...
})
```

#### Limpieza:
```javascript
// Cleanup en useEffect return
if (p5Ref.current) {
  p5Ref.current.remove()
}
```

---

### 5.3 **components/ScrollReveal.js**

**Líneas de código:** ~40 líneas  
**API:** Intersection Observer  
**Responsabilidad:** Animación de entrada al hacer scroll

#### Props:
- `children`: Contenido a animar
- `delay`: Retraso en ms (default: 0)
- `className`: Clases adicionales

#### Funcionamiento:
```javascript
// Observer con threshold y rootMargin
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
      observer.unobserve(entry.target)  // Una sola vez
    }
  },
  {
    threshold: 0.1,              // 10% visible
    rootMargin: '0px 0px -50px 0px'  // Trigger antes
  }
)
```

#### CSS Aplicado:
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s, transform 0.8s;
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 5.4 **pages/_app.js**

**Líneas de código:** 5 líneas  
**Responsabilidad:** Wrapper global de Next.js

```javascript
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

**Función:** Importa los estilos globales para todas las páginas.

---

## 6. Flujo de Datos

### 6.1 Flujo de Renderizado

```
1. Usuario accede a impermeabilizacion.uio.ec
   ↓
2. GitHub Pages sirve index.html estático
   ↓
3. Browser descarga bundles de JS y CSS
   ↓
4. React hydrate la aplicación
   ↓
5. HeroP5 monta y carga p5.js dinámicamente
   ↓
6. ScrollReveal observers se registran
   ↓
7. Usuario hace scroll → Animations trigger
```

### 6.2 No hay Fetching de Datos
- Todo el contenido es estático
- No hay API calls
- No hay state management global
- State local solo para animaciones (isVisible, p5 instance)

---

## 7. Scripts y Automatización

### 7.1 Scripts de package.json

```json
{
  "dev": "next dev --webpack",        // Modo desarrollo
  "build": "next build",               // Build de producción
  "start": "next start",               // Servidor (no usado)
  "export": "next export",             // Export estático
  "postexport": "node postexport.js",  // Post-proceso
  "deploy": "gh-pages -d out"          // Deploy manual (no usado)
}
```

### 7.2 postexport.js

**Propósito:** Asegurar que GitHub Pages sirva correctamente

```javascript
// Archivos a copiar
const filesToCopy = ['CNAME', '.nojekyll']

// Copia a out/
filesToCopy.forEach((file) => {
  fs.copyFileSync(src, dest)
})

// Si .nojekyll no existe, lo crea vacío
```

**Importancia:**
- `CNAME`: Define el dominio personalizado
- `.nojekyll`: Evita que GitHub Pages use Jekyll (procesaría _next como privado)

### 7.3 version-css.js

**Estado:** No utilizado actualmente  
**Propósito original:** Versionado de CSS para cache busting  
**Nota:** Next.js ya maneja esto automáticamente con hashes en nombres de archivos

---

## 8. Sistema de Deploy

### 8.1 GitHub Actions Workflow

**Archivo:** `.github/workflows/deploy.yml`  
**Trigger:** Push a branch `main`  
**Runner:** `ubuntu-latest`

#### Pasos del Pipeline:

```yaml
1. actions/checkout@v4
   - Clona el repositorio

2. actions/setup-node@v4
   - Instala Node.js 20.x

3. npm install
   - Instala dependencias

4. npm run build + npm run export
   - Genera archivos estáticos en out/

5. npm run postexport
   - Copia CNAME y .nojekyll

6. peaceiris/actions-gh-pages@v4
   - Publica out/ a branch gh-pages
   - force_orphan: true (limpia historia)
```

### 8.2 Configuración de GitHub Pages

- **Source:** Branch `gh-pages`
- **Root:** `/` (raíz del branch)
- **Custom Domain:** www.impermeabilizacion.uio.ec
- **HTTPS:** Habilitado (automático con dominio personalizado)

### 8.3 DNS Configuration

**Archivo CNAME contiene:**
```
www.impermeabilizacion.uio.ec
```

**Requerimientos DNS externos:**
- CNAME record: www → freudiandev.github.io
- O A records apuntando a IPs de GitHub Pages

---

## 9. Configuración

### 9.1 Next.js Config Detallado

```javascript
const nextConfig = {
  reactStrictMode: true,           // Modo estricto de React
  
  images: { 
    unoptimized: true              // Desactiva optimización (requerido para export)
  },
  
  trailingSlash: true,             // URLs terminan en /
                                   // /contacto → /contacto/
  
  output: 'export',                // SSG puro, sin servidor
  
  assetPrefix: '/',                // Prefijo para assets
  basePath: '',                    // Sin base path
}
```

### 9.2 Variables de Entorno

**No utiliza variables de entorno**  
Todo está hardcodeado en el código fuente (apropiado para sitio estático público)

### 9.3 .gitignore

```
node_modules/      # Dependencias
.next/             # Cache de Next.js
.env.local         # Vars de entorno locales
.env*.local
*.log              # Logs
dist/              # Build output
build/
```

---

## 10. Dependencias

### 10.1 Dependencias de Producción

```json
{
  "install": "^0.13.0",      // Herramienta de instalación global
  "next": "^16.0.3",         // Framework React
  "p5": "^1.9.0",            // Librería de canvas
  "react": "^19.2.0",        // Biblioteca UI
  "react-dom": "^19.2.0"     // React DOM renderer
}
```

#### Análisis:
- **install 0.13.0**: Probablemente no necesaria, puede removerse
- **next 16.0.3**: Versión muy reciente (diciembre 2024)
- **p5 1.9.0**: Versión estable y actual
- **react 19.2.0**: Versión muy reciente de React 19
- **react-dom 19.2.0**: Matching React version

### 10.2 Dependencias de Desarrollo

```json
{
  "gh-pages": "^6.3.0"     // Deploy helper (no usado en CI/CD actual)
}
```

### 10.3 Análisis de Vulnerabilidades

**Estado:** Sin análisis de seguridad incluido  
**Recomendación:** Ejecutar `npm audit` periódicamente

---

## 11. Métricas del Proyecto

### 11.1 Líneas de Código

| Archivo | Líneas | Tipo |
|---------|--------|------|
| pages/index.js | ~280 | JavaScript (JSX) |
| styles/globals.css | 536 | CSS |
| components/HeroP5.js | ~75 | JavaScript (JSX) |
| components/ScrollReveal.js | ~40 | JavaScript (JSX) |
| next.config.js | ~12 | JavaScript |
| postexport.js | ~25 | JavaScript |
| pages/_app.js | ~5 | JavaScript (JSX) |

**Total aproximado:** ~973 líneas de código fuente

### 11.2 Assets

- **Imágenes:** 6 archivos JPG (proyectos 1-6)
- **Tamaño estimado de build:** ~2-3 MB (incluyendo JS bundles)

---

## 12. Consideraciones de Rendimiento

### 12.1 Optimizaciones Implementadas

✅ **Static Site Generation:** HTML pre-renderizado  
✅ **Code Splitting:** Next.js automático  
✅ **CSS Minificado:** En producción  
✅ **Lazy Loading:** Imágenes nativas  
✅ **Intersection Observer:** Para scroll animations  
✅ **Dynamic Import:** p5.js solo cuando se monta HeroP5  

### 12.2 Puntos de Mejora Potenciales

⚠️ **Imágenes sin optimización:** Se usan JPG sin compresión moderna (considerar WebP)  
⚠️ **No hay Service Worker:** Sin capacidad offline  
⚠️ **Google Fonts:** Carga de fuentes externa (considerar self-hosting)  
⚠️ **p5.js Bundle:** ~1MB, se carga completo (considerar solo las funciones necesarias)  

---

## 13. Mantenimiento y Soporte

### 13.1 Actualizaciones Recomendadas

```bash
# Verificar versiones desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit
npm audit fix
```

### 13.2 Testing

**Estado actual:** Sin tests  
**Recomendación:** Agregar tests para componentes críticos:
- HeroP5 mounting/unmounting
- ScrollReveal trigger logic
- Responsive behavior

### 13.3 Monitoreo

**Herramientas sugeridas:**
- Google Analytics (agregar tracking)
- Google Search Console (SEO)
- Lighthouse (performance audits)

---

## 14. Seguridad

### 14.1 Análisis de Seguridad

✅ **No hay backend:** Sin superficie de ataque del servidor  
✅ **No hay formularios:** Sin riesgo de XSS en inputs  
✅ **External links:** Usan `rel="noopener"` correctamente  
✅ **HTTPS:** Habilitado en GitHub Pages  

### 14.2 Recomendaciones

- Mantener dependencias actualizadas
- Monitorear npm audit regularmente
- Considerar CSP (Content Security Policy) headers

---

## 15. Roadmap y Mejoras Futuras

### 15.1 Funcionalidades Potenciales

📋 **Formulario de Contacto:**
- Integración con servicio externo (Formspree, Netlify Forms)
- Validación client-side

📊 **Analytics:**
- Google Analytics 4
- Tracking de conversiones

🎨 **Mejoras Visuales:**
- Más animaciones interactivas
- Parallax scrolling
- Video testimonials

📱 **PWA:**
- Service Worker
- Manifest.json
- Capacidad offline

🌐 **Internacionalización:**
- Soporte multi-idioma (ES/EN)

---

## 16. Contacto y Créditos

### Desarrollador
**freudianDev**  
Instagram: [@freudiandev](https://www.instagram.com/freudiandev/)

### Cliente
**ImperBlock**  
CEO: Manolo Bello  
Teléfono: 095 978 5062  
Sitio: impermeabilizacion.uio.ec

---

## 17. Conclusión

ImperBlock es una landing page profesional, moderna y eficiente que cumple perfectamente su propósito de presentar los servicios de impermeabilización. La arquitectura elegida (Next.js + SSG + GitHub Pages) es apropiada para el caso de uso: sitio estático, bajo costo de hosting, fácil mantenimiento y excelente rendimiento.

El código está bien estructurado, usa tecnologías modernas y sigue buenas prácticas de desarrollo web. Las animaciones con p5.js añaden un toque diferenciador sin comprometer el rendimiento.

**Estado del proyecto:** ✅ Producción  
**Calidad del código:** ⭐⭐⭐⭐☆ (4/5)  
**Mantenibilidad:** ⭐⭐⭐⭐⭐ (5/5)  
**Rendimiento:** ⭐⭐⭐⭐☆ (4/5)

---

**Documento generado:** 12 de diciembre de 2025  
**Versión:** 1.0
