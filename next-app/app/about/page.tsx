import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'Biography — Kashmir Physicist to Punjabi Poet',
  description: 'The journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet and literary organization founder.',
  alternates: {
    canonical: 'https://surinderseerat.com/about',
  },
  openGraph: {
    title: 'Biography — Kashmir Physicist to Punjabi Poet',
    description: 'The journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet.',
    images: ['/images/poet-portrait.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biography — Kashmir Physicist to Punjabi Poet',
    description: 'The journey of Surinder Singh Seerat: born in Kashmir, trained as a physicist, became an award-winning Punjabi poet.',
    images: ['/images/poet-portrait.webp'],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
