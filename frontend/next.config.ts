/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '', // Leave empty for default port
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/**',  // Allow images from your backend's /uploads folder
      },
    ],
  },
  // Other config options can go here
};

module.exports = nextConfig;