import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PoliciesPageContent } from '@/components/pages/PoliciesPageContent';

export const metadata: Metadata = {
  title: 'Policies — Privacy, Terms & Copyright',
  description: 'Privacy policy, terms of service, and copyright information for surinderseerat.com.',
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
