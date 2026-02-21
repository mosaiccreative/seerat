'use client';

import { m, motion } from 'framer-motion';
import Image from 'next/image';
import { useMotionPreference } from '@/hooks/useMotionPreference';

const seeratBookPng = '/images/seerat-book-cover.webp';

// Create motion-compatible Image component (requires full motion import)
const MotionImage = motion.create(Image);

interface BookCoverProps {
  onOpen: () => void;
  isOpening: boolean;
}

export function BookCover({ onOpen, isOpening }: BookCoverProps) {
  const { shouldAnimate } = useMotionPreference();

  return (
    <m.div
      className="fixed inset-0 z-[60] flex items-center justify-center cursor-pointer overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{ duration: 1.2, delay: isOpening ? 0.2 : 0 }}
      onClick={onOpen}
    >
      {/* Floating book - simple up/down motion only */}
      <MotionImage
        src={seeratBookPng}
        alt="Surinder Seerat book cover"
        className="block"
        width={600}
        height={900}
        priority
        style={{
          maxHeight: '50vh',
          maxWidth: '60%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))',
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: shouldAnimate && !isOpening ? [0, -12, 0] : 0,
          scale: isOpening ? 2 : 1,
        }}
        transition={
          isOpening
            ? { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
            : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {/* Call to action */}
      <m.div
        className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
        transition={{ duration: 0.5, delay: isOpening ? 0 : 0.6 }}
      >
        <m.p
          className="font-ui text-xs md:text-sm tracking-[0.4em] uppercase text-foreground/60 mb-4"
        >
          Open the book
        </m.p>
        <m.div
          className="w-px h-10 mx-auto bg-gradient-to-b from-gold/60 to-transparent"
          animate={shouldAnimate ? { scaleY: [1, 1.15, 1] } : undefined}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </m.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/30" />
    </m.div>
  );
}

