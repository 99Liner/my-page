/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Outputs a static HTML/CSS/JS 'out' folder
  basePath: isProd ? '/my-page' : '', 
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js image server
  },
};

module.exports = nextConfig;
