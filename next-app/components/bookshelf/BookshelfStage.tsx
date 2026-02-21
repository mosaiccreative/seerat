'use client';

import { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import { m } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { Book } from '@/data/books';
import { BookSpine } from './BookSpine';
import { cn } from '@/lib/utils';

interface BookshelfStageProps {
  books: Book[];
  motionEnabled: boolean;
  onBookSelect?: (bookId: string) => void;
  centered?: boolean;
}

export function BookshelfStage({ books, motionEnabled, onBookSelect, centered = false }: BookshelfStageProps) {
  const spineRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Responsive alignment: center on mobile/tablet, start on desktop (Tailwind `lg` = 1024px)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 1024px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

    // Subscribe to changes only (initial value set in useState)
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const emblaOptions = useMemo(
    () => ({
      loop: true,
      align: (centered || !isDesktop ? 'center' : 'start') as 'start' | 'center',
      // On smaller screens or when centered prop is true, start in the middle so the shelf *visually* reads as centered.
      startIndex: (centered || !isDesktop) ? Math.floor(books.length / 2) : 0,
      dragFree: true,
      containScroll: false as const,
      skipSnaps: true,
    }),
    [isDesktop, books.length, centered]
  );

  // Wheel gestures plugin for mouse wheel horizontal scrolling
  const wheelGesturesPlugin = useMemo(() => WheelGesturesPlugin({
    forceWheelAxis: 'x',
  }), []);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [wheelGesturesPlugin]);

  useEffect(() => {
    // Ensure Embla recalculates alignment on breakpoint changes
    emblaApi?.reInit(emblaOptions);
  }, [emblaApi, emblaOptions]);

  const handleSelectBook = useCallback((bookId: string) => {
    const cardElement = document.getElementById(`book-card-${bookId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onBookSelect?.(bookId);
  }, [onBookSelect]);

  const _handleKeyDown = useCallback((e: React.KeyboardEvent, bookId: string, index: number) => {
    const bookIds = books.map(b => b.id);
    let targetIndex: number | null = null;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        targetIndex = index > 0 ? index - 1 : books.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        targetIndex = index < books.length - 1 ? index + 1 : 0;
        break;
    }

    if (targetIndex !== null) {
      const targetId = bookIds[targetIndex];
      const targetSpine = spineRefs.current.get(targetId);
      if (targetSpine) {
        targetSpine.focus();
      }
    }
  }, [books]);

  return (
    <div 
      className="relative w-full mx-auto"
      role="list"
      aria-label="Book collection - select a spine to scroll to details"
    >
      <div className="relative">
        {/* Scroll fade indicators - hint that content is scrollable */}
        <div
          className="absolute left-0 top-0 bottom-10 w-16 md:w-20 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)), transparent)'
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-10 w-16 md:w-20 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to left, hsl(var(--background)), transparent)'
          }}
          aria-hidden="true"
        />
        
        {/* Embla carousel container */}
        <div
          ref={emblaRef}
          className={cn(
            "overflow-hidden cursor-grab active:cursor-grabbing",
            // Extra bottom padding (pb-10) to accommodate year labels below spines
            "pt-8 pb-10 px-4 md:px-8"
          )}
        >
          <div className="flex items-end gap-2 md:gap-4">
            {books.map((book, index) => (
              <m.div
                key={book.id}
                role="listitem"
                className="flex-shrink-0"
                initial={motionEnabled ? { opacity: 0, y: 30 } : undefined}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <BookSpine
                  ref={(el) => {
                    if (el) spineRefs.current.set(book.id, el);
                    else spineRefs.current.delete(book.id);
                  }}
                  title={book.title}
                  year={book.year}
                  isSelected={false}
                  onSelect={() => handleSelectBook(book.id)}
                  motionEnabled={motionEnabled}
                  coverImage={book.coverImage}
                  index={index}
                />
              </m.div>
            ))}
          </div>
        </div>

        {/* Shelf base */}
        <div className="relative h-4 mx-4 md:mx-8">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[hsl(25_20%_18%)] to-[hsl(25_15%_12%)]"
            style={{
              boxShadow: '0 4px 12px -2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-[hsl(25_15%_10%)] to-[hsl(25_10%_8%)]" />
        </div>
      </div>
    </div>
  );
}
