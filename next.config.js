/** @type {import('next').NextConfig} */
const repo = 'ImperBlock'; // tu repo
const nextConfig = {
  reactStrictMode: true,
  // Para que los assets y rutas funcionen en GitHub Pages
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export', // Habilita la exportación estática moderna
  // ...otros settings si tienes
};
module.exports = nextConfig
