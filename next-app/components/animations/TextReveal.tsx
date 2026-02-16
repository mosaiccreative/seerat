'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export function TextReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: TextRevealProps) {
  const { shouldAnimate } = useMotionPreference();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const Component = motion[as];

  if (!shouldAnimate) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <Component
        initial={{ 
          y: '100%',
          opacity: 0,
        }}
        animate={inView ? { 
          y: 0,
          opacity: 1,
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
}
