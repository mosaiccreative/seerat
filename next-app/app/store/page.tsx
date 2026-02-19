import type { Metadata } from 'next';
import { StorePageContent } from '@/components/pages/StorePageContent';

export const metadata: Metadata = {
  title: 'Bookshop — Purchase Poetry Collections & Signed Editions',
  description: 'Shop Surinder Singh Seerat\'s complete collection: physical books, digital editions, and exclusive signed copies. Punjabi poetry delivered worldwide. Coming soon.',
  alternates: {
    canonical: 'https://surinderseerat.com/store',
  },
  openGraph: {
    title: 'Bookshop — Purchase Poetry Collections & Signed Editions',
    description: 'Shop Surinder Singh Seerat\'s complete collection: physical books, digital editions, and exclusive signed copies. Punjabi poetry delivered worldwide.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookshop — Purchase Poetry Collections & Signed Editions',
    description: 'Shop Surinder Singh Seerat\'s collection: physical books, digital editions, and exclusive signed copies. Coming soon.',
    images: ['/og-image.png'],
  },
};

export default function StorePage() {
  return <StorePageContent />;
}
