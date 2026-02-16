'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import { DecorativeDivider } from '@/components/ui/decorative-divider';
import { books } from '@/data/books';

export function BooksSection() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-cream text-burgundy">
      <div className="max-w-5xl mx-auto">
        <CinematicReveal className="text-center mb-16 md:mb-20">
          <span className="chapter-label block mb-4">The Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Thirteen Books, <span className="text-gold italic">45 Years</span>
          </h2>
          <p className="text-burgundy/60 mt-4 max-w-xl mx-auto text-base md:text-lg">
            From 1980 to 2025, exploring themes of longing, consciousness, diaspora, and transformation.
          </p>
        </CinematicReveal>
        
        <DecorativeDivider variant="rhythm" className="mb-16" />
        
        {/* Gallery grid - film strip style */}
        <StaggerReveal 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" 
          staggerDelay={0.08}
        >
          {books.slice(0, 8).map((book) => (
            <motion.article
              key={book.id}
              className="group relative overflow-hidden focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 focus-within:ring-offset-cream"
              whileHover={shouldAnimate ? { y: -4 } : undefined}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {book.coverImage && (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="font-ui text-[10px] md:text-xs text-gold/80 mb-1 tracking-wider">
                  {book.year}
                </p>
                <h3 className="font-display text-sm md:text-base leading-tight text-cream">
                  {book.title}
                </h3>
                {book.award && (
                  <p className="font-ui text-[10px] text-gold/70 mt-2" aria-label="Award-winning book">
                    🏆
                  </p>
                )}
              </div>

              {/* Focus-visible link overlay */}
              <Link
                href={`/books/${book.id}`}
                className="absolute inset-0 focus:outline-none"
                aria-label={`View ${book.title}`}
              />
            </motion.article>
          ))}
        </StaggerReveal>
        
        <CinematicReveal className="text-center mt-16">
          <Link
            href="/books" 
            className="btn-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Browse Complete Collection
            <ArrowRight size={16} />
          </Link>
        </CinematicReveal>
      </div>
    </section>
  );
}
