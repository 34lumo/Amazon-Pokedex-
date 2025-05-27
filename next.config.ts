import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/pokemon',
        destination: 'https://<TU_BACKEND_URL>/Prod/pokemon',
      },
      {
        source: '/api/pokemon/:id',
        destination: 'https://<TU_BACKEND_URL>/Prod/pokemon/:id',
      },
    ];
  },
};

export default nextConfig;
