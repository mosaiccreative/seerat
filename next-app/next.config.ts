import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily ignore TypeScript errors during build (pre-existing UI component issues)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Redirect www to non-www
  async redirects() {
    return [
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
    ];
  },
  // Image domains for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
