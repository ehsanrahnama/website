/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/website/',

};

export default nextConfig;
