'use client';

import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export function ScrollCue() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <div className="flex flex-col items-center gap-3" role="presentation">
      <span className="font-ui text-[10px] tracking-[0.25em] uppercase text-cream/60">
        Scroll
      </span>
      <motion.div
        className="relative"
        animate={shouldAnimate ? { y: [0, 6, 0] } : undefined}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </div>
  );
}
