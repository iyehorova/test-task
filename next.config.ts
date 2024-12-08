import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    quietDeps: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/orders',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
