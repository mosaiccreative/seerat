import type { Metadata } from 'next';
import { CoursePageContent } from '@/components/pages/CoursePageContent';

export const metadata: Metadata = {
  title: 'Poetry Course — Coming Soon',
  description: 'Learn the art of ghazals, free-verse, and meaningful poetry from Surinder Seerat with five decades of literary experience.',
  openGraph: {
    title: 'Learn Poetry with Surinder Seerat',
    description: 'A comprehensive course on ghazals, free-verse, and the craft of meaningful poetry.',
  },
};

export default function CoursePage() {
  return <CoursePageContent />;
}
