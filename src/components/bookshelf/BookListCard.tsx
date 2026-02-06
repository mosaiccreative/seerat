import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { YearBadgeGold } from './YearBadgeGold';
import { AwardBadge } from './AwardBadge';
import { ReadMoreLink } from './ReadMoreLink';
import { cn } from '@/lib/utils';

interface BookListCardProps {
  id: string;
  title: string;
  year: string;
  type: string;
  description: string;
  award?: string;
  foreword?: string;
  coverImage?: string;
  startHere?: boolean;
  motionEnabled: boolean;
  index: number;
}

export function BookListCard({
  id,
  title,
  year,
  type,
  description,
  award,
  foreword,
  coverImage,
  startHere,
  motionEnabled,
  index,
}: BookListCardProps) {
  return (
    <motion.article
      id={`book-card-${id}`}
      className={cn(
        "grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10",
        "py-10 md:py-14 border-b border-border/30",
        "scroll-mt-24"
      )}
      initial={motionEnabled ? { opacity: 0, y: 40 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {/* Cover Image */}
      <div className="relative">
        <AspectRatio ratio={3/4} className="bg-muted overflow-hidden">
          {coverImage ? (
            <img 
              src={coverImage} 
              alt={`Cover of ${title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            // Typographic fallback
            <div className="w-full h-full bg-gradient-to-br from-[hsl(25_20%_15%)] to-[hsl(25_15%_10%)] flex flex-col items-center justify-center p-6 text-center">
              <span className="font-display text-xl text-cream/80 leading-tight">
                {title}
              </span>
              <span className="font-ui text-xs text-gold/60 mt-3 tracking-widest">
                {year}
              </span>
            </div>
          )}
        </AspectRatio>
        
        {/* Start Here badge */}
        {startHere && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-gold/90 text-background text-xs font-ui tracking-wide">
            <Check size={12} />
            Start Here
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col max-w-[65ch]">
        {/* Year Badge */}
        <YearBadgeGold year={year} className="mb-4 self-start" />
        
        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
          {title}
        </h3>
        
        {/* Type/Form */}
        <p className="text-muted-foreground text-sm md:text-base mb-3">
          {type}
        </p>
        
        {/* Foreword */}
        {foreword && (
          <p className="text-muted-foreground/80 text-sm italic mb-4">
            Foreword by {foreword}
          </p>
        )}
        
        {/* Decorative divider */}
        <div className="w-16 h-px bg-gold/30 mb-5" aria-hidden="true" />
        
        {/* Description */}
        <p className="text-foreground/90 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Award */}
        {award && (
          <AwardBadge award={award} className="mb-6" />
        )}
        
        {/* Read More Link */}
        <ReadMoreLink to={`/books/${id}`} className="mt-auto" />
      </div>
    </motion.article>
  );
}
