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
  typescript: {
    ignoreBuildErrors: true, // avoid type noise from generated chunks
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ],
      },
    ];
  },
  
  // Generate unique build ID for cache busting
  generateBuildId: async () => {
    // Usar timestamp para forzar actualización en cada deploy
    return `build-${Date.now()}`;
  },
};

module.exports = nextConfig;
