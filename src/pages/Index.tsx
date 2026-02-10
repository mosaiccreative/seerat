import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';

// Above-the-fold section loaded eagerly
import { HeroSection } from '@/components/sections/home/HeroSection';

// Below-the-fold sections lazy-loaded to reduce TTI
const StatsSection = lazy(() => import('@/components/sections/StatsSection').then(m => ({ default: m.StatsSection })));
const RareCombinationSection = lazy(() => import('@/components/sections/home/RareCombinationSection').then(m => ({ default: m.RareCombinationSection })));
const DifferenceSection = lazy(() => import('@/components/sections/home/DifferenceSection').then(m => ({ default: m.DifferenceSection })));
const BooksSection = lazy(() => import('@/components/sections/home/BooksSection').then(m => ({ default: m.BooksSection })));
const AudienceSection = lazy(() => import('@/components/sections/home/AudienceSection').then(m => ({ default: m.AudienceSection })));
const PoetSection = lazy(() => import('@/components/sections/home/PoetSection').then(m => ({ default: m.PoetSection })));
const QuoteSection = lazy(() => import('@/components/sections/home/QuoteSection').then(m => ({ default: m.QuoteSection })));
const NewsletterSection = lazy(() => import('@/components/sections/home/NewsletterSection').then(m => ({ default: m.NewsletterSection })));

const SESSION_KEY = 'book-opened-this-session';

const Index = () => {
  const { shouldAnimate } = useMotionPreference();
  
  // Check if book was already opened this session
  const hasOpenedThisSession = sessionStorage.getItem(SESSION_KEY) === 'true';
  
  const [bookOpened, setBookOpened] = useState(hasOpenedThisSession);
  const [showContent, setShowContent] = useState(hasOpenedThisSession);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenBook = () => {
    setIsOpening(true);

    setTimeout(() => {
      setBookOpened(true);
      sessionStorage.setItem(SESSION_KEY, 'true');
      setTimeout(() => setShowContent(true), 100);
    }, shouldAnimate ? 2000 : 100);
  };

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
};

export default Index;
