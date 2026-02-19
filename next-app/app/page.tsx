import type { Metadata } from 'next';
import { HomePageContent } from '@/components/pages/HomePageContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://surinderseerat.com',
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
