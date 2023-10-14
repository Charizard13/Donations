/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["klvoddikzmytpbewxsir.supabase.co"],
  },
  i18n: {
    locales: ["en-US", "he-IL"],
    defaultLocale: "he-IL",
  },
};

module.exports = nextConfig;
