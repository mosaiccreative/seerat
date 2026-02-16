import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Surinder Seerat — From Physics to Poetry',
  description: 'The story of Surinder Singh Seerat: Kashmir-born physicist turned award-winning Punjabi poet. First in his community to graduate university, founder of California\'s premier Punjabi literary organization.',
  openGraph: {
    title: 'About Surinder Seerat — From Physics to Poetry',
    description: 'The story of Surinder Singh Seerat: Kashmir-born physicist turned award-winning Punjabi poet.',
    images: ['/images/poet-portrait.jpg'],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
