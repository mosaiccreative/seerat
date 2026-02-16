'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { useInView } from 'react-intersection-observer';

interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  blur?: boolean;
}

export function CinematicReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = true,
}: CinematicRevealProps) {
  const { shouldAnimate } = useMotionPreference();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-50px 0px',
  });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
        ...directionOffset[direction],
      }}
      animate={inView ? {
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
      } : undefined}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
