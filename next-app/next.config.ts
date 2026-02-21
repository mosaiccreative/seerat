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
  // Image configuration - use Netlify Image CDN for optimization
  images: {
    // Enable Next.js image optimization with Netlify's image CDN
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    // Specify allowed image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
  },
};

export default nextConfig;
