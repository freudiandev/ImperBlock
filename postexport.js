// postexport.js
// Copia CNAME y .nojekyll a la carpeta out/ tras exportar

const fs = require('fs');
const path = require('path');

const filesToCopy = ['CNAME', '.nojekyll'];
const outDir = path.join(__dirname, 'out');

filesToCopy.forEach((file) => {
  const src = path.join(__dirname, file);
  const dest = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copiado ${file} a out/`);
  } else {
    // Si no existe, crea .nojekyll vacío
    if (file === '.nojekyll') {
      fs.writeFileSync(dest, '');
      console.log('Creado .nojekyll vacío en out/');
    }
  }
});
