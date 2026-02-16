'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ReactNode } from 'react';

interface StaggeredListProps {
  items: ReactNode[];
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const itemTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export function StaggeredList({
  items,
  staggerDelay = 0.1,
  className = 'grid grid-cols-1 md:grid-cols-2 gap-8',
  itemClassName = '',
}: StaggeredListProps) {
  const { shouldAnimate } = useMotionPreference();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  if (!shouldAnimate) {
    return (
      <div className={className}>
        {items.map((item, index) => (
          <div key={index} className={itemClassName}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={customContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants} 
          transition={itemTransition}
          className={itemClassName}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
