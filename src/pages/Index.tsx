import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';

// Home page sections
import { HeroSection } from '@/components/sections/home/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { RareCombinationSection } from '@/components/sections/home/RareCombinationSection';
import { DifferenceSection } from '@/components/sections/home/DifferenceSection';
import { BooksSection } from '@/components/sections/home/BooksSection';
import { AudienceSection } from '@/components/sections/home/AudienceSection';
import { PoetSection } from '@/components/sections/home/PoetSection';
import { QuoteSection } from '@/components/sections/home/QuoteSection';
import { NewsletterSection } from '@/components/sections/home/NewsletterSection';

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
          <StatsSection />
          <RareCombinationSection />
          <DifferenceSection />
          <BooksSection />
          <AudienceSection />
          <PoetSection />
          <QuoteSection />
          <NewsletterSection />
        </PageLayout>
      )}
    </div>
  );
};

export default Index;
