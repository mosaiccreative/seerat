import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'Biography — From Kashmir Physicist to Punjabi Literary Voice',
  description: 'The remarkable journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet. First in his community to graduate university, founder of California literary organizations.',
  alternates: {
    canonical: 'https://surinderseerat.com/about',
  },
  openGraph: {
    title: 'Biography — From Kashmir Physicist to Punjabi Literary Voice',
    description: 'The remarkable journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet. First in his community to graduate university.',
    images: ['/images/poet-portrait.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biography — From Kashmir Physicist to Punjabi Literary Voice',
    description: 'The remarkable journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet.',
    images: ['/images/poet-portrait.webp'],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
