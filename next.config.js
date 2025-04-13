/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Remove or change this
  output: 'export', // Add this if you don't have it
  // ... other configurations
  unoptimized: true,
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;