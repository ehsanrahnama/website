/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Remove or change this
  output: 'export', // Add this if you don't have it
  // ... other configurations
  unoptimized: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/website/', // Replace '/website/' with your repository name if different

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;