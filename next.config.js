/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["miro.medium.com"],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
