/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export',
  // ...otros settings si tienes
};
module.exports = nextConfig
