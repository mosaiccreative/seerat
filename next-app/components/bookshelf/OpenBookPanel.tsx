'use client';

import { useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Book } from '@/data/books';
import { YearBadgeGold } from './YearBadgeGold';
import { AwardBadge } from './AwardBadge';
import { ReadMoreLink } from './ReadMoreLink';
import { cn } from '@/lib/utils';

interface OpenBookPanelProps {
  book: Book | null;
  onClose: () => void;
  motionEnabled: boolean;
  enhancedData?: {
    subtitle?: string;
    theme?: string;
    form?: string;
    whoFor?: string[];
    expandedDescription?: string;
  };
}

export function OpenBookPanel({ book, onClose, motionEnabled, enhancedData }: OpenBookPanelProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus management - move focus to heading when book opens
  useEffect(() => {
    if (book && headingRef.current) {
      headingRef.current.focus();
    }
  }, [book]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && book) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [book, onClose]);

  const panelVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 40,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {book && (
        <>
          {/* Backdrop */}
          <m.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <m.div
            ref={panelRef}
            className={cn(
              "fixed inset-4 md:inset-8 lg:inset-12 z-50",
              "bg-card border border-border/50",
              "overflow-y-auto",
              "flex flex-col"
            )}
            variants={motionEnabled ? panelVariants : undefined}
            initial={motionEnabled ? "hidden" : { opacity: 1 }}
            animate={motionEnabled ? "visible" : { opacity: 1 }}
            exit={motionEnabled ? "exit" : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 right-4 md:top-6 md:right-6 z-10",
                "p-2 text-muted-foreground hover:text-foreground",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              )}
              aria-label="Close book details"
            >
              <X size={24} />
            </button>

            {/* Content container */}
            <div className="flex-1 flex flex-col lg:flex-row">
              {/* Book cover side */}
              <div className="lg:w-2/5 shrink-0 p-6 md:p-8 lg:p-12 flex items-center justify-center bg-muted/30">
                {book.coverImage ? (
                  <m.img
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="max-h-[50vh] lg:max-h-[70vh] w-auto object-contain shadow-2xl"
                    initial={motionEnabled ? { rotateY: -10, opacity: 0 } : undefined}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    loading="lazy"
                  />
                ) : (
                  // Typographic cover fallback
                  <div className="aspect-[3/4] w-full max-w-[280px] bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="text-gold/50 text-6xl font-display mb-4">੧</div>
                      <h3 className="font-display text-xl text-cream">{book.title}</h3>
                      <p className="text-cream/60 text-sm mt-2">{book.year}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Details side */}
              <div className="flex-1 p-6 md:p-8 lg:p-12 lg:overflow-y-auto">
                <div className="max-w-[65ch] mx-auto lg:mx-0">
                  {/* Year badge */}
                  <YearBadgeGold year={book.year} className="mb-6" />

                  {/* Title */}
                  <h2
                    ref={headingRef}
                    id="book-title"
                    className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 focus:outline-none"
                    tabIndex={-1}
                  >
                    {book.title}
                  </h2>

                  {/* Type/Form */}
                  {(enhancedData?.form || book.type) && (
                    <p className="text-muted-foreground font-ui text-sm tracking-wide mb-4">
                      {enhancedData?.form || book.type}
                    </p>
                  )}

                  {/* Foreword attribution */}
                  {book.foreword && (
                    <p className="text-foreground/80 italic mb-6">
                      Foreword by {book.foreword}
                    </p>
                  )}

                  {/* Description */}
                  <div className="prose-poetry mb-8">
                    <p className="text-foreground/90 leading-relaxed">
                      {enhancedData?.expandedDescription || book.description}
                    </p>
                  </div>

                  {/* Theme */}
                  {enhancedData?.theme && (
                    <div className="mb-6 p-4 border-l-2 border-gold/50 bg-gold/5">
                      <p className="text-sm text-muted-foreground mb-1 font-ui">Theme</p>
                      <p className="text-foreground">{enhancedData.theme}</p>
                    </div>
                  )}

                  {/* Who it's for */}
                  {enhancedData?.whoFor && enhancedData.whoFor.length > 0 && (
                    <div className="mb-8">
                      <p className="text-sm text-muted-foreground mb-3 font-ui">Who it&apos;s for</p>
                      <ul className="space-y-2">
                        {enhancedData.whoFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-gold mt-0.5">◆</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Award badge */}
                  {book.award && (
                    <div className="mb-8">
                      <AwardBadge award={book.award} />
                    </div>
                  )}

                  {/* Read More link */}
                  <ReadMoreLink href={`/books/${book.id}`} />
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-gold/30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-gold/30 pointer-events-none" aria-hidden="true" />
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
