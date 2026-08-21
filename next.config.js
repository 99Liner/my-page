/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-page' : '',
  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;