import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/funeral-homes/:state/:city/:slug(.*\\..*)',
        destination: '/funeral-homes/:state/:city',
        permanent: true,
      },
      {
        source: '/veteran-burial-benefits',
        destination: '/veterans-funeral-benefits',
        permanent: true,
      },
      {
        source: '/blog/memorial-service-ideas-no-body',
        destination: '/blog/memorial-service-ideas',
        permanent: true,
      },
      {
        source: '/blog/what-happens-during-cremation',
        destination: '/blog/what-happens-to-the-body-during-cremation',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/condolence-text-messages',
        destination: '/blog/condolence-text-message',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/pro',
        destination: 'https://evermore-pro.vercel.app/pro',
      },
      {
        source: '/pro/:path*',
        destination: 'https://evermore-pro.vercel.app/pro/:path*',
      },
    ]
  },
};

export default nextConfig;
