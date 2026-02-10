import { useMemo, useState } from 'react';
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
  form?: string;
  subtitle?: string;
  theme?: string;
  description: string;
  whoFor?: string[];
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
  form,
  subtitle,
  theme,
  description,
  whoFor,
  award,
  foreword,
  coverImage,
  startHere,
  motionEnabled,
  index,
}: BookListCardProps) {
  const [coverFailed, setCoverFailed] = useState(false);
  const effectiveCover = useMemo(() => {
    if (!coverImage) return undefined;
    if (coverFailed) return undefined;
    return coverImage;
  }, [coverImage, coverFailed]);

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
          {effectiveCover ? (
            <img
              src={effectiveCover}
              alt={`Cover of ${title}`}
              className="w-full h-full object-contain bg-[hsl(25_20%_12%)]"
              loading="lazy"
              onError={() => setCoverFailed(true)}
              referrerPolicy="no-referrer"
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
      </div>

      {/* Details */}
      <div className="flex flex-col max-w-[65ch]">
        {/* Top badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* Year badge */}
          <span className="px-3 py-1 text-xs font-ui tracking-wide border border-border/50 text-muted-foreground">
            {year}
          </span>
          
          {/* Form badge */}
          {form && (
            <span className="px-3 py-1 text-xs font-ui tracking-wide border border-border/50 text-muted-foreground">
              {form}
            </span>
          )}
          
          {/* Award badge inline */}
          {award && (
            <span className="px-3 py-1 text-xs font-ui tracking-wide bg-gold/10 border border-gold/30 text-gold">
              🏆 {award}
            </span>
          )}
          
          {/* Start Here badge */}
          {startHere && (
            <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-ui tracking-wide border border-gold/50 text-gold">
              <Check size={12} />
              Start Here
            </span>
          )}
        </div>
        
        {/* Title with year */}
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-1">
          {title}
        </h3>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="font-display italic text-muted-foreground text-base md:text-lg mb-4">
            {subtitle}
          </p>
        )}
        
        {/* Theme */}
        {theme && (
          <p className="text-foreground/90 mb-4">
            <span className="font-semibold">Theme:</span> {theme}
          </p>
        )}
        
        {/* Foreword */}
        {foreword && (
          <p className="text-foreground/80 italic mb-4">
            Foreword by {foreword}
          </p>
        )}

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Who it's for */}
        {whoFor && whoFor.length > 0 && (
          <div className="mb-6">
            <p className="font-semibold text-foreground mb-2">Who it's for:</p>
            <ul className="space-y-1">
              {whoFor.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Read More Link */}
        <ReadMoreLink to={`/books/${id}`} className="mt-auto" />
      </div>
    </motion.article>
  );
}
