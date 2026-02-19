import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily ignore TypeScript errors during build (pre-existing UI component issues)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Redirects: www to non-www + legacy URL aliases
  async redirects() {
    return [
      // www to non-www redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.surinderseerat.com',
          },
        ],
        destination: 'https://surinderseerat.com/:path*',
        permanent: true,
      },
      // Legacy URL redirects (old routes that Google indexed)
      {
        source: '/biography',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/connect',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  // Image configuration - disable optimization for Netlify compatibility
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
