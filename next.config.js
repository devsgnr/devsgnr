/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
  },
};

module.exports = nextConfig;
