import type { Metadata } from 'next';
import { BooksPageContent } from '@/components/pages/BooksPageContent';

export const metadata: Metadata = {
  title: 'Bibliography — 13 Books Across 45 Years',
  description: 'Explore Surinder Singh Seerat\'s complete works: poetry collections, novels, short stories, and critical scholarship from 1980 to 2025.',
  alternates: {
    canonical: 'https://surinderseerat.com/books',
  },
  openGraph: {
    title: 'Bibliography — 13 Books Across 45 Years',
    description: 'Explore Surinder Singh Seerat\'s complete works: poetry collections, novels, short stories, and scholarship from 1980 to 2025.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bibliography — 13 Books Across 45 Years',
    description: 'Explore Surinder Singh Seerat\'s complete works: poetry, novels, stories, and scholarship from 1980 to 2025.',
    images: ['/og-image.png'],
  },
};

export default function BooksPage() {
  return <BooksPageContent />;
}
