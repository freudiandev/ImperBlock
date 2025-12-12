/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  
  // Para GitHub Pages (export estático)
  output: process.env.BUILD_MODE === 'export' ? 'export' : 'standalone',
  
  // Configuración para dominio personalizado
  assetPrefix: '',
  basePath: '',
};

module.exports = nextConfig;
