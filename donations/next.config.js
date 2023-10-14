/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['northarm.co.il'],
  }
};

module.exports = nextConfig;