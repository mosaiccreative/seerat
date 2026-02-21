'use client';

import { ReactNode, Children } from 'react';
import { m, type Easing } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { useInView } from 'react-intersection-observer';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  blur?: boolean;
}

const easeOut: Easing = [0.16, 1, 0.3, 1];

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  blur = true,
}: StaggerRevealProps) {
  const { shouldAnimate } = useMotionPreference();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-30px 0px',
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: blur ? 'blur(6px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {Children.map(children, (child) => (
        <m.div variants={item}>{child}</m.div>
      ))}
    </m.div>
  );
}
