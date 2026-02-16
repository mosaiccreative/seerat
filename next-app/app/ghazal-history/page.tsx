import type { Metadata } from 'next';
import { GhazalHistoryPageContent } from '@/components/pages/GhazalHistoryPageContent';

export const metadata: Metadata = {
  title: 'History of the Ghazal — From Arabia to Punjab',
  description: 'Explore the 1,400-year journey of the ghazal form: from 7th-century Arabia through Persian masters to Punjabi poetry today.',
  openGraph: {
    title: 'History of the Ghazal — From Arabia to Punjab',
    description: 'The 1,400-year journey of the ghazal from Arabia through Persia to Punjab.',
    images: ['/images/ghazal-history-hero.jpg'],
  },
};

export default function GhazalHistoryPage() {
  return <GhazalHistoryPageContent />;
}
