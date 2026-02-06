import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Book } from '@/data/books';
import { BookSpine } from './BookSpine';
import { OpenBookPanel } from './OpenBookPanel';
import { ShelfDividerMotif } from './ShelfDividerMotif';
import { cn } from '@/lib/utils';

interface BookshelfStageProps {
  books: Book[];
  motionEnabled: boolean;
  enhancedBookData?: Record<string, {
    subtitle?: string;
    theme?: string;
    form?: string;
    whoFor?: string[];
    expandedDescription?: string;
    startHere?: boolean;
  }>;
}

export function BookshelfStage({ books, motionEnabled, enhancedBookData }: BookshelfStageProps) {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const spineRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const lastFocusedId = useRef<string | null>(null);

  const selectedBook = books.find(b => b.id === selectedBookId) || null;
  const selectedEnhanced = selectedBookId && enhancedBookData 
    ? enhancedBookData[selectedBookId] 
    : undefined;

  const handleSelectBook = useCallback((bookId: string) => {
    lastFocusedId.current = bookId;
    setSelectedBookId(bookId);
  }, []);

  const handleCloseBook = useCallback(() => {
    setSelectedBookId(null);
    // Return focus to the spine that was selected
    if (lastFocusedId.current) {
      const spine = spineRefs.current.get(lastFocusedId.current);
      if (spine) {
        setTimeout(() => spine.focus(), 100);
      }
    }
  }, []);

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

  // Split books into shelves (4-5 per shelf for visual balance)
  const booksPerShelf = 4;
  const shelves: Book[][] = [];
  for (let i = 0; i < books.length; i += booksPerShelf) {
    shelves.push(books.slice(i, i + booksPerShelf));
  }

  return (
    <>
      {/* Bookshelf container */}
      <div 
        className="relative w-full max-w-5xl mx-auto px-4 md:px-8"
        role="list"
        aria-label="Book collection"
      >
        {shelves.map((shelfBooks, shelfIndex) => (
          <div key={shelfIndex} className="mb-8 last:mb-0">
            {/* Shelf with books */}
            <div className="relative">
              {/* Shelf surface */}
              <div 
                className={cn(
                  "relative flex items-end justify-center gap-2 md:gap-4",
                  "pt-8 pb-4 px-4 md:px-8"
                )}
              >
                {shelfBooks.map((book, index) => {
                  const globalIndex = shelfIndex * booksPerShelf + index;
                  return (
                    <motion.div
                      key={book.id}
                      role="listitem"
                      initial={motionEnabled ? { opacity: 0, y: 30 } : undefined}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: globalIndex * 0.08, 
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
                        isSelected={selectedBookId === book.id}
                        onSelect={() => handleSelectBook(book.id)}
                        motionEnabled={motionEnabled}
                        coverImage={book.coverImage}
                        index={globalIndex}
                      />
                    </motion.div>
                  );
                })}
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

            {/* Decorative divider between shelves */}
            {shelfIndex < shelves.length - 1 && (
              <ShelfDividerMotif className="my-8" />
            )}
          </div>
        ))}
      </div>

      {/* Open book panel */}
      <OpenBookPanel
        book={selectedBook}
        onClose={handleCloseBook}
        motionEnabled={motionEnabled}
        enhancedData={selectedEnhanced}
      />
    </>
  );
}
