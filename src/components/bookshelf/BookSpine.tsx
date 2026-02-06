import { forwardRef } from 'react';
import { motion } from 'framer-motion';
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
    // Deterministic spine thickness based on title length
    const spineWidth = 48 + (title.length % 4) * 4;
    
    // Deterministic hue variation based on index
    const hueShift = (index * 15) % 45;

    return (
      <motion.button
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
          y: isSelected ? -8 : 0,
        } : undefined}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        whileHover={motionEnabled ? { y: -4 } : undefined}
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
          style={{
            background: coverImage 
              ? `linear-gradient(to right, hsl(${20 + hueShift} 30% 12%), hsl(${20 + hueShift} 25% 18%))`
              : `linear-gradient(to right, hsl(${20 + hueShift} 25% 15%), hsl(${20 + hueShift} 20% 22%))`,
          }}
        >
          {/* Spine edge highlight */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/10 to-gold/20" />
          
          {/* Top edge */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
          
          {/* Texture overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Title - rotated */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className={cn(
                "font-display text-sm md:text-base text-cream/90 whitespace-nowrap",
                "transition-colors duration-300",
                "group-hover:text-gold",
                isSelected && "text-gold"
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
        
        {/* Tooltip on hover */}
        <div className={cn(
          "absolute -top-12 left-1/2 -translate-x-1/2",
          "px-3 py-1.5 bg-card border border-border rounded",
          "font-ui text-xs text-foreground whitespace-nowrap",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          "pointer-events-none z-10",
          isSelected && "opacity-0"
        )}>
          {title} ({year})
        </div>
      </motion.button>
    );
  }
);

BookSpine.displayName = 'BookSpine';
