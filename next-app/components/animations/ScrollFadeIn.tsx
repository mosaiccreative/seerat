'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

export function ScrollFadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.2,
}: ScrollFadeInProps) {
  const { shouldAnimate } = useMotionPreference();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
