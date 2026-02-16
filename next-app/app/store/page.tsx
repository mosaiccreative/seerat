import type { Metadata } from 'next';
import { StorePageContent } from '@/components/pages/StorePageContent';

export const metadata: Metadata = {
  title: 'Bookshop — Coming Soon',
  description: 'Physical books, ebooks, and exclusive bundles. Bringing Surinder Seerat\'s works directly to your library.',
  openGraph: {
    title: 'The Bookshop — Coming Soon',
    description: 'Physical books, ebooks, and exclusive bundles from Surinder Seerat.',
  },
};

export default function StorePage() {
  return <StorePageContent />;
}
