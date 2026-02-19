import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PoliciesPageContent } from '@/components/pages/PoliciesPageContent';

export const metadata: Metadata = {
  title: 'Privacy Policy, Terms of Service & Copyright Notice',
  description: 'Legal information for surinderseerat.com including privacy policy, terms of service, cookie policy, and copyright protection for literary works and content.',
  alternates: {
    canonical: 'https://surinderseerat.com/policies',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliciesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PoliciesPageContent />
    </Suspense>
  );
}
