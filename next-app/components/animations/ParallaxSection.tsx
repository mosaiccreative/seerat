'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useMotionPreference } from '@/hooks/useMotionPreference';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: 'slow' | 'medium' | 'fast';
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  contentClassName?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  speed = 'medium',
  overlay = true,
  overlayOpacity = 0.5,
  className = '',
  contentClassName = '',
}: ParallaxSectionProps) {
  const { shouldAnimate } = useMotionPreference();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const speedMap = {
    slow: '20%',
    medium: '40%',
    fast: '60%',
  };

  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['0%', shouldAnimate ? speedMap[speed] : '0%']
  );
  
  const contentOpacity = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    shouldAnimate ? [0.6, 1, 1, 0.6] : [1, 1, 1, 1]
  );

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: backgroundY,
          }}
        >
          {overlay && (
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: `rgba(10, 10, 10, ${overlayOpacity})` }}
            />
          )}
        </motion.div>
      )}
      
      <motion.div 
        style={{ opacity: contentOpacity }}
        className={contentClassName}
      >
        {children}
      </motion.div>
    </section>
  );
}
