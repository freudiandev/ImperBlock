/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export',
  // Si usas un dominio personalizado, assetPrefix y basePath deben ser "/"
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // ...otros settings si tienes
};
module.exports = nextConfig
