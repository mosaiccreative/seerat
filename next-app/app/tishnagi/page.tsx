import type { Metadata } from 'next';
import { TishnagiPageContent } from '@/components/pages/TishnagiPageContent';

export const metadata: Metadata = {
  title: 'Tishnagi — The Punjabi Ghazal Album by Surinder Seerat',
  description: 'Listen to Tishnagi (Thirst), a musical collection of ghazals by Surinder Singh Seerat. Experience the emotional depth of Punjabi poetry set to traditional and contemporary music.',
  alternates: {
    canonical: 'https://surinderseerat.com/tishnagi',
  },
  openGraph: {
    title: 'Tishnagi — The Punjabi Ghazal Album by Surinder Seerat',
    description: 'Listen to Tishnagi (Thirst), a musical collection of ghazals by Surinder Singh Seerat. Experience Punjabi poetry set to music.',
    images: ['/images/tishnagi-album-cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tishnagi — The Punjabi Ghazal Album by Surinder Seerat',
    description: 'Listen to Tishnagi, ghazals by Surinder Singh Seerat set to traditional and contemporary music.',
    images: ['/images/tishnagi-album-cover.jpg'],
  },
};

export default function TishnagiPage() {
  return <TishnagiPageContent />;
}
