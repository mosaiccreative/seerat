'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { HeroSection } from '@/components/sections/home/HeroSection';

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

  // Server-render the hero content immediately for better LCP
  // The book cover and animations are progressive enhancements
  if (!mounted) {
    return (
      <div className="noise-overlay">
        <PageLayout>
          <HeroSection />
        </PageLayout>
      </div>
    );
  }

  return (
    <div className="noise-overlay">
      {/* Book Cover Intro */}
      <AnimatePresence>
        {!bookOpened && (
          <BookCover onOpen={handleOpenBook} isOpening={isOpening} />
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      {showContent && (
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
      )}
    </div>
  );
}
