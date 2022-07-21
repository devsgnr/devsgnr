/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coming-soon',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/coming-soon',
        permanent: true,
      },
      {
        source: '/mindscape',
        destination: '/coming-soon',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphassets.com'],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
