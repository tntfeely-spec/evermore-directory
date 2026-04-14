import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/funeral-homes/:state/:city/:slug(.*\\..*)',
        destination: '/funeral-homes/:state/:city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
