// version-css.js
// Automatiza el versionado de CSS en el build estático de Next.js
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const nextStaticDir = path.join(docsDir, '_next', 'static', 'css');
const buildIdFile = path.join(docsDir, '_next', 'BUILD_ID');

// 1. Obtener buildId
let buildId = '';
try {
  buildId = fs.readFileSync(buildIdFile, 'utf8').trim();
} catch (e) {
  // fallback: buscar en _next/static/
  const staticDirs = fs.readdirSync(path.join(docsDir, '_next', 'static'));
  buildId = staticDirs.find((d) => d.length === 20 && !d.includes('.')) || '';
}
if (!buildId) {
  console.error('No se pudo determinar el buildId de Next.js');
  process.exit(1);
}

// 2. Renombrar el archivo CSS agregando el buildId
const cssFiles = fs.readdirSync(nextStaticDir).filter(f => f.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('No se encontró ningún archivo CSS en el build estático.');
  process.exit(1);
}
const originalCss = cssFiles[0];
const ext = path.extname(originalCss);
const base = path.basename(originalCss, ext);
const versionedCss = `${base}.${buildId}${ext}`;
const originalCssPath = path.join(nextStaticDir, originalCss);
const versionedCssPath = path.join(nextStaticDir, versionedCss);
fs.copyFileSync(originalCssPath, versionedCssPath);

// 3. Actualizar referencias en todos los HTML de docs
const htmlFiles = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  const filePath = path.join(docsDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace(new RegExp(originalCss, 'g'), versionedCss);
  fs.writeFileSync(filePath, html, 'utf8');
}

console.log(`Versionado de CSS aplicado: ${versionedCss}`);