import type { Metadata } from 'next';
import { BooksPageContent } from '@/components/pages/BooksPageContent';

export const metadata: Metadata = {
  title: 'Thirteen Books, 45 Years of Poetry',
  description: 'Poetry, novels, stories, and scholarship spanning five decades. From Chhallan (1980) to Amrīkī Punjabi Kahāṇī (2025).',
  openGraph: {
    title: 'Thirteen Books, 45 Years of Poetry | Surinder Seerat',
    description: 'Poetry, novels, stories, and scholarship spanning five decades.',
  },
};

export default function BooksPage() {
  return <BooksPageContent />;
}
