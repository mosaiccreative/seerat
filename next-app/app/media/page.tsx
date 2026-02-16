import type { Metadata } from 'next';
import { MediaPageContent } from '@/components/pages/MediaPageContent';

export const metadata: Metadata = {
  title: 'Media & Press',
  description: 'Coverage, interviews, and features about Surinder Seerat from publications across India and beyond.',
  openGraph: {
    title: 'Surinder Seerat in the Media',
    description: 'Coverage, interviews, and features from publications across India and beyond.',
  },
};

export default function MediaPage() {
  return <MediaPageContent />;
}
