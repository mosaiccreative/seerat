import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Book } from '@/data/books';
import { BookSpine } from './BookSpine';
import { cn } from '@/lib/utils';

interface BookshelfStageProps {
  books: Book[];
  motionEnabled: boolean;
  onBookSelect?: (bookId: string) => void;
}

export function BookshelfStage({ books, motionEnabled, onBookSelect }: BookshelfStageProps) {
  const spineRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleSelectBook = useCallback((bookId: string) => {
    // Scroll to the corresponding book card
    const cardElement = document.getElementById(`book-card-${bookId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onBookSelect?.(bookId);
  }, [onBookSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, bookId: string, index: number) => {
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
      {/* Single-row shelf with horizontal scroll on mobile */}
      <div className="relative">
        {/* Scroll fade indicators - visible only when scrollable */}
        <div 
          className="absolute left-0 top-0 bottom-4 w-8 pointer-events-none md:hidden z-10"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)), transparent)'
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute right-0 top-0 bottom-4 w-8 pointer-events-none md:hidden z-10"
          style={{
            background: 'linear-gradient(to left, hsl(var(--background)), transparent)'
          }}
          aria-hidden="true"
        />
        
        {/* Shelf surface with books */}
        <div 
          className={cn(
            "relative overflow-x-auto scrollbar-hide",
            "pt-8 pb-4 px-4 md:px-8"
          )}
        >
          <div className="flex items-end justify-start md:justify-center gap-2 md:gap-4 min-w-max md:min-w-0 mx-auto">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                role="listitem"
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shelf base */}
        <div className="relative h-4 mx-4 md:mx-8">
          {/* Wood texture */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[hsl(25_20%_18%)] to-[hsl(25_15%_12%)]"
            style={{
              boxShadow: '0 4px 12px -2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          />
          {/* Shelf edge */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-[hsl(25_15%_10%)] to-[hsl(25_10%_8%)]" />
        </div>
      </div>
    </div>
  );
}
