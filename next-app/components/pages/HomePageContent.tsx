'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { cn } from '@/lib/utils';

// Below-the-fold sections lazy-loaded
const StatsSection = lazy(() => import('@/components/sections/StatsSection').then(m => ({ default: m.StatsSection })));
const RareCombinationSection = lazy(() => import('@/components/sections/home/RareCombinationSection').then(m => ({ default: m.RareCombinationSection })));
const DifferenceSection = lazy(() => import('@/components/sections/home/DifferenceSection').then(m => ({ default: m.DifferenceSection })));
const BooksSection = lazy(() => import('@/components/sections/home/BooksSection').then(m => ({ default: m.BooksSection })));
const AudienceSection = lazy(() => import('@/components/sections/home/AudienceSection').then(m => ({ default: m.AudienceSection })));
const PoetSection = lazy(() => import('@/components/sections/home/PoetSection').then(m => ({ default: m.PoetSection })));
const QuoteSection = lazy(() => import('@/components/sections/home/QuoteSection').then(m => ({ default: m.QuoteSection })));
const NewsletterSection = lazy(() => import('@/components/sections/home/NewsletterSection').then(m => ({ default: m.NewsletterSection })));

const SESSION_KEY = 'book-opened-this-session';

export function HomePageContent() {
  const { shouldAnimate } = useMotionPreference();
  const [mounted, setMounted] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional hydration pattern
    setMounted(true);
    const hasOpenedThisSession = sessionStorage.getItem(SESSION_KEY) === 'true';
    if (hasOpenedThisSession) {
      setBookOpened(true);
      setShowContent(true);
    }
  }, []);

  const handleOpenBook = () => {
    setIsOpening(true);

    setTimeout(() => {
      setBookOpened(true);
      sessionStorage.setItem(SESSION_KEY, 'true');
      setTimeout(() => setShowContent(true), 100);
    }, shouldAnimate ? 2000 : 100);
  };

  // Always render full content in DOM for SEO (crawlers can't click the book)
  // Use CSS opacity to control visibility for users while keeping content indexable
  return (
    <div className="noise-overlay">
      {/* Book Cover Intro - overlay that fades out on click */}
      {mounted && (
        <AnimatePresence>
          {!bookOpened && (
            <BookCover onOpen={handleOpenBook} isOpening={isOpening} />
          )}
        </AnimatePresence>
      )}

      {/* Main Website Content - ALWAYS in DOM for crawlers */}
      {/* Uses CSS opacity (not display:none) so content remains indexable */}
      <div
        className={cn(
          "transition-opacity duration-500",
          // Before hydration or during book animation: hidden from users but in DOM for crawlers
          // After book opened: fully visible
          !mounted || showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        // Ensure crawlers can still read content even when visually hidden
        aria-hidden={mounted && !showContent ? "true" : undefined}
      >
        <PageLayout>
          <HeroSection />
          <Suspense fallback={null}>
            <StatsSection />
            <RareCombinationSection />
            <DifferenceSection />
            <BooksSection />
            <AudienceSection />
            <PoetSection />
            <QuoteSection />
            <NewsletterSection />
          </Suspense>
        </PageLayout>
      </div>
    </div>
  );
}
