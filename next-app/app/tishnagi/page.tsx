import type { Metadata } from 'next';
import { TishnagiPageContent } from '@/components/pages/TishnagiPageContent';

export const metadata: Metadata = {
  title: 'Tishnagi — The Ghazal Album',
  description: 'Listen to Tishnagi, a collection of ghazals by Surinder Seerat set to music. Experience the musical dimension of Punjabi poetry.',
  openGraph: {
    title: 'Tishnagi — The Ghazal Album by Surinder Seerat',
    description: 'A collection of ghazals set to music. Experience the musical dimension of Punjabi poetry.',
    images: ['/images/tishnagi-album-cover.jpg'],
  },
};

export default function TishnagiPage() {
  return <TishnagiPageContent />;
}
