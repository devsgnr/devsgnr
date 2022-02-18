/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
