'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <div className="relative overflow-hidden aspect-[3/4]">
        {effectiveCover ? (
          <Image
            src={effectiveCover}
            alt={`Cover of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setCoverFailed(true)}
          />
        ) : (
          <div className="w-full h-full bg-[hsl(25_20%_12%)] flex items-center justify-center">
            <span className="text-6xl opacity-10">੧</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 pointer-events-none" />
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
