/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['northarm.co.il'],
  },
  i18n: {
    locales: ['en-US', 'he-IL'],
    defaultLocale: 'he-IL',
  },
};

module.exports = nextConfig;