/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  
  // Para export estático (GitHub Pages)
  output: process.env.BUILD_MODE === 'export' ? 'export' : 'standalone',
  
  // Si usas un dominio personalizado, assetPrefix y basePath deben ser "/"
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.BUILD_MODE === 'export' ? '/' : '',
  basePath: process.env.NODE_ENV === 'production' && process.env.BUILD_MODE === 'export' ? '' : '',
  
  // Configuración para Docker
  ...(process.env.BUILD_MODE !== 'export' && {
    output: 'standalone',
  }),
};

module.exports = nextConfig;
