'use client';

import { forwardRef, useMemo, useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BookSpineProps {
  title: string;
  year: string;
  isSelected: boolean;
  onSelect: () => void;
  motionEnabled: boolean;
  coverImage?: string;
  index: number;
}

export const BookSpine = forwardRef<HTMLButtonElement, BookSpineProps>(
  ({ title, year, isSelected, onSelect, motionEnabled, coverImage, index }, ref) => {
    const [coverFailed, setCoverFailed] = useState(false);

    // Deterministic spine thickness based on title length
    const spineWidth = 48 + (title.length % 4) * 4;

    const effectiveCover = useMemo(() => {
      if (!coverImage) return undefined;
      if (coverFailed) return undefined;
      return coverImage;
    }, [coverImage, coverFailed]);

    // Deterministic hue variation based on index (reserved for future use)
    const _hueShift = (index * 15) % 45;

    return (
      <m.button
        ref={ref}
        onClick={onSelect}
        className={cn(
          "relative flex flex-col items-center justify-end pb-3",
          "h-[280px] md:h-[340px]",
          "cursor-pointer group",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
        style={{ width: spineWidth }}
        initial={false}
        animate={motionEnabled ? {
          z: isSelected ? 20 : 0,
          y: isSelected ? -12 : 0,
        } : undefined}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        whileHover={motionEnabled ? {
          y: -16,
          scale: 1.02,
          transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
        } : undefined}
        whileTap={motionEnabled ? { scale: 0.98 } : undefined}
        aria-label={`Open book details: ${title}, ${year}`}
        aria-pressed={isSelected}
        role="button"
      >
        {/* Spine body */}
        <div
          className={cn(
            "absolute inset-0 rounded-sm overflow-hidden",
            "transition-all duration-300",
            isSelected ? "shadow-[0_8px_30px_-8px_hsl(var(--gold)/0.4)]" : "shadow-lg",
            "group-hover:shadow-[0_8px_25px_-8px_hsl(var(--gold)/0.3)]"
          )}
        >
          {/* Cover image imprint */}
          {effectiveCover && (
            <Image
              src={effectiveCover}
              alt=""
              aria-hidden
              fill
              sizes="60px"
              className="object-cover opacity-60"
              style={{ objectPosition: 'center top' }}
              onError={() => setCoverFailed(true)}
            />
          )}

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

          {/* Spine edge highlight */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/10 to-gold/20" />

          {/* Top edge */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
          
          {/* Spine edge highlight */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/10 to-gold/20" />
          
          {/* Top edge */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
          
          {/* Title - rotated */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className={cn(
                "font-display text-sm md:text-base text-cream/90 whitespace-nowrap",
                "transition-colors duration-300",
                "group-hover:text-gold",
                isSelected && "text-gold",
                "drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              )}
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                maxHeight: '85%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </span>
          </div>
        </div>
        
        {/* Year tick at bottom */}
        <div className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-2",
          "font-ui text-[10px] tracking-wider text-muted-foreground",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isSelected && "opacity-100 text-gold"
        )}>
          {year}
        </div>
        
      </m.button>
    );
  }
);

BookSpine.displayName = 'BookSpine';
