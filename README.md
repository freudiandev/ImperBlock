# ImperBlock — Landing Profesional

Landing estática con Next.js + animación p5.js (constelación) para **ImperBlock**, empresa de impermeabilización profesional en Quito.

## 🎨 Diseño y Paleta

- **Colores corporativos**: Azul oscuro (#1e3a5f) + Naranja/Amarillo (#f39200)
- **Animación hero**: Partículas y líneas conectadas (estilo constelación) con p5.js
- **Estilo**: Minimalista, serio, corporativo

## 🚀 Ejecutar localmente

### Requisitos
- Node.js v18+ (recomendado)

### Pasos (Windows PowerShell)

```powershell
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:3000**

### Build para producción

```powershell
npm run build
npm start
```

## 📂 Estructura del Proyecto

```
├── components/
│   └── HeroP5.js          # Animación p5.js (constelación)
├── pages/
│   ├── _app.js            # App wrapper (carga estilos)
│   └── index.js           # Landing page principal
├── styles/
│   └── globals.css        # Estilos globales + paleta
├── public/
│   └── images/            # Imágenes de proyectos
└── package.json
```

## 📱 Contenido Principal

✅ **Hero animado** con p5.js (partículas naranja + líneas)  
✅ **Badge de garantía**: 5 años + mantenimiento anual  
✅ **Servicios**: Terrazas, tejados, fosos, cisternas  
✅ **Proceso**: 5 pasos desde contacto hasta garantía  
✅ **Galería** de proyectos reales  
✅ **Contacto**: Teléfono 095 978 5062, WhatsApp, redes sociales  
✅ **Valores**: Seriedad, conocimiento, responsabilidad

## 🔧 Personalización

### Ajustar animación p5.js
Edita `components/HeroP5.js`:
- `config.count`: cantidad de partículas (default: 80)
- `config.maxDist`: distancia de conexión (default: 120)
- Colores en líneas 36-37 y 47-48

### Actualizar paleta
Edita `styles/globals.css` (líneas 1-8):
```css
:root{
  --brand-color:#1e3a5f;    /* Azul principal */
  --accent:#f39200;         /* Naranja/amarillo */
  /* ... */
}
```

### Agregar más imágenes
Coloca archivos JPG/PNG en `public/images/` y actualiza la galería en `pages/index.js` (sección `#galeria`).

## 📞 Datos de Contacto (actuales)

- **Teléfono**: 095 978 5062
- **Instagram**: @imperblock.ec
- **Facebook**: imperblock.ec
- **TikTok**: @imperblock.ec
- **Ubicación**: Quito (Zona Norte, desde El Ejido hasta La Kennedy)

## 🌐 Deploy (Recomendado)

### Vercel (más fácil para Next.js)
1. Push del proyecto a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. Deploy automático

### Netlify / Otras plataformas
Next.js es compatible con cualquier plataforma que soporte Node.js.

## 📈 SEO y Marketing

- Meta tags básicos ya incluidos en `pages/index.js`
- Para campañas: agregar Google Analytics / Facebook Pixel
- WhatsApp Business: link directo ya implementado
- Formulario de contacto: pendiente (se puede agregar con Formspree, Netlify Forms, etc.)

---

**ImperBlock** — Solucionamos problemas, no los creamos.  
© 2025 Manolo Bello | Quito, Ecuador
