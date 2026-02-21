'use client';

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // For local images, use Netlify's image CDN
  if (src.startsWith('/')) {
    // Netlify Image CDN format: /.netlify/images?url=SOURCE&w=WIDTH&q=QUALITY
    const params = new URLSearchParams({
      url: src,
      w: width.toString(),
      q: (quality || 75).toString(),
    });
    return `/.netlify/images?${params.toString()}`;
  }

  // For external images, return as-is
  return src;
}
