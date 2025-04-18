/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // ou '' se for a raiz
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
// module.exports = { reactStrictMode: true };
