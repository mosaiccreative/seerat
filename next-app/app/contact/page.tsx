import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact — Events & Collaborations',
  description: 'Connect with Surinder Singh Seerat for poetry readings, literary events, academic collaborations, book purchases, and library acquisitions. Response within 48 hours.',
  alternates: {
    canonical: 'https://surinderseerat.com/contact',
  },
  openGraph: {
    title: 'Contact — Events & Collaborations',
    description: 'Connect with Surinder Singh Seerat for poetry readings, literary events, academic collaborations, book purchases, and library acquisitions.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Events & Collaborations',
    description: 'Connect with Surinder Singh Seerat for poetry readings, literary events, academic collaborations, and book purchases.',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
