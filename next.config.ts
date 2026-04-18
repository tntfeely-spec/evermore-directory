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
