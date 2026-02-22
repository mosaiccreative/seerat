import type { Metadata } from 'next';
import { CoursePageContent } from '@/components/pages/CoursePageContent';

export const metadata: Metadata = {
  title: 'Poetry Masterclass — Ghazal & Free Verse',
  description: 'Master the art of Punjabi poetry with Surinder Singh Seerat. Learn ghazal composition, free verse techniques, and meaningful poetry craft from 45 years of literary experience.',
  alternates: {
    canonical: 'https://surinderseerat.com/course',
  },
  openGraph: {
    title: 'Poetry Masterclass — Ghazal & Free Verse',
    description: 'Master the art of Punjabi poetry with Surinder Singh Seerat. Learn ghazal composition, free verse techniques, and meaningful poetry craft.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poetry Masterclass — Ghazal & Free Verse',
    description: 'Master Punjabi poetry with Surinder Singh Seerat. Learn ghazal composition and free verse from 45 years of experience.',
    images: ['/og-image.png'],
  },
};

export default function CoursePage() {
  return <CoursePageContent />;
}
