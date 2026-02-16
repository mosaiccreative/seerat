'use client';

import { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { SkipLink } from '@/components/ui/skip-link';
import { ScrollToTop } from '@/components/ScrollToTop';
 
 interface PageLayoutProps {
   children: ReactNode;
 }
 
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SkipLink />
      <SiteHeader />
       <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
         {children}
       </main>
       <SiteFooter />
     </div>
   );
 }