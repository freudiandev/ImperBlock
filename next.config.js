/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export',
  basePath: '/ImperBlock',
  assetPrefix: '/ImperBlock/',
  // ...otros settings si tienes
};
module.exports = nextConfig
