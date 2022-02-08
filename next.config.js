/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
  },
  redirects: async () => {
    return [
      {
        source: '/newsletter',
        destination:
          'https://substack.com/profile/7356108-devsgnr_?utm_source=user-menu',
        permanent: true,
      },
      {
        source: '/r',
        destination: 'https://www.reddit.com/user/devsgnr_',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
