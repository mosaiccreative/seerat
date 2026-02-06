import { useState } from 'react';
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

const Index = () => {
  const { shouldAnimate } = useMotionPreference();
  const [bookOpened, setBookOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenBook = () => {
    setIsOpening(true);

    setTimeout(() => {
      setBookOpened(true);
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
