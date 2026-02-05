 import { ReactNode } from 'react';
 import { SiteHeader } from './SiteHeader';
 import { SiteFooter } from './SiteFooter';
 import { SkipLink } from '@/components/ui/skip-link';
 
 interface PageLayoutProps {
   children: ReactNode;
 }
 
 export function PageLayout({ children }: PageLayoutProps) {
   return (
     <div className="min-h-screen flex flex-col">
       <SkipLink />
       <SiteHeader />
       <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
         {children}
       </main>
       <SiteFooter />
     </div>
   );
 }