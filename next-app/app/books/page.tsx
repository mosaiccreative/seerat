import type { Metadata } from 'next';
import { BooksPageContent } from '@/components/pages/BooksPageContent';

export const metadata: Metadata = {
  title: 'Complete Bibliography — 13 Books Across 45 Years of Writing',
  description: 'Explore the complete literary works of Surinder Singh Seerat: poetry collections, novels, short stories, and critical scholarship from 1980 to 2025. Award-winning Punjabi literature.',
  alternates: {
    canonical: 'https://surinderseerat.com/books',
  },
  openGraph: {
    title: 'Complete Bibliography — 13 Books Across 45 Years of Writing',
    description: 'Explore the complete literary works of Surinder Singh Seerat: poetry collections, novels, short stories, and critical scholarship from 1980 to 2025.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Bibliography — 13 Books Across 45 Years of Writing',
    description: 'Explore the complete literary works of Surinder Singh Seerat: poetry, novels, stories, and scholarship from 1980 to 2025.',
    images: ['/og-image.png'],
  },
};

export default function BooksPage() {
  return <BooksPageContent />;
}
