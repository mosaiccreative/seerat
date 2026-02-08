import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

interface BookCardProps {
  title: string;
  year: string;
  description: string;
  coverImage?: string;
  award?: string;
  index?: number;
}

export function BookCard({
  title,
  year,
  description,
  coverImage,
  award,
  index = 0
}: BookCardProps) {
  const { shouldAnimate } = useMotionPreference();
  const [coverFailed, setCoverFailed] = useState(false);

  const effectiveCover = useMemo(() => {
    if (!coverImage) return undefined;
    if (coverFailed) return undefined;
    return coverImage;
  }, [coverImage, coverFailed]);

  return (
    <motion.article
      className="card-book group"
      initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: shouldAnimate ? index * 0.1 : 0,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="aspect-[3/4] bg-paper-aged relative overflow-hidden">
        {effectiveCover ? (
          <img
            src={effectiveCover}
            alt={`Cover of ${title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setCoverFailed(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl opacity-10">੧</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
      </div>
 

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl md:text-2xl leading-tight">
            {title}
          </h3>
          <span className="font-ui text-xs text-muted-foreground shrink-0">
            {year}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {award && (
          <p className="mt-4 font-ui text-xs text-accent tracking-wide">
            ★ {award}
          </p>
        )}
      </div>
    </motion.article>
  );
}
