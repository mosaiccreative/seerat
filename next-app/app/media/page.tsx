import type { Metadata } from 'next';
import { MediaPageContent } from '@/components/pages/MediaPageContent';

export const metadata: Metadata = {
  title: 'Media & Press — Interviews, Features & Literary Coverage',
  description: 'Read interviews, features, and press coverage of Surinder Singh Seerat from literary publications across India, North America, and beyond. Four decades of critical acclaim.',
  alternates: {
    canonical: 'https://surinderseerat.com/media',
  },
  openGraph: {
    title: 'Media & Press — Interviews, Features & Literary Coverage',
    description: 'Read interviews, features, and press coverage of Surinder Singh Seerat from literary publications across India, North America, and beyond.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Press — Interviews, Features & Literary Coverage',
    description: 'Interviews, features, and press coverage of Surinder Singh Seerat from literary publications worldwide.',
    images: ['/og-image.png'],
  },
};

export default function MediaPage() {
  return <MediaPageContent />;
}
