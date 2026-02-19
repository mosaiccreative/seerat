import type { Metadata } from 'next';
import { GhazalHistoryPageContent } from '@/components/pages/GhazalHistoryPageContent';

export const metadata: Metadata = {
  title: 'History of the Ghazal — 1,400 Years from Arabia to Punjab',
  description: 'Explore the complete history of the ghazal poetic form: from 7th-century Arabian origins through Persian masters like Hafiz and Rumi to its flowering in Punjabi literature today.',
  alternates: {
    canonical: 'https://surinderseerat.com/ghazal-history',
  },
  openGraph: {
    title: 'History of the Ghazal — 1,400 Years from Arabia to Punjab',
    description: 'Explore the complete history of the ghazal: from 7th-century Arabian origins through Persian masters like Hafiz and Rumi to Punjabi literature today.',
    images: ['/images/ghazal-history-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of the Ghazal — 1,400 Years from Arabia to Punjab',
    description: 'The 1,400-year journey of the ghazal from Arabia through Persia to Punjab. A complete literary history.',
    images: ['/images/ghazal-history-hero.jpg'],
  },
};

export default function GhazalHistoryPage() {
  return <GhazalHistoryPageContent />;
}
