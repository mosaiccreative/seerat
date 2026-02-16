import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Surinder Seerat for inquiries about events, readings, book purchases, or literary collaborations.',
  openGraph: {
    title: 'Contact Surinder Seerat',
    description: 'For inquiries about events, readings, book purchases, or literary collaborations.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
