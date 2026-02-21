'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

interface MotionContextType {
  motionReduced: boolean;
  toggleMotion: () => void;
  shouldAnimate: boolean;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const mountedRef = useRef(false);
  const [motionReduced, setMotionReduced] = useState(false);

  useEffect(() => {
    mountedRef.current = true;
    // Check localStorage first
    const stored = localStorage.getItem('motion-reduced');
    if (stored !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional hydration from localStorage
      setMotionReduced(stored === 'true');
    } else {
      // Then check system preference
      setMotionReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;

    // Apply class to document
    if (motionReduced) {
      document.documentElement.classList.add('motion-reduced');
    } else {
      document.documentElement.classList.remove('motion-reduced');
    }

    // Persist preference
    localStorage.setItem('motion-reduced', String(motionReduced));
  }, [motionReduced]);

  const toggleMotion = () => setMotionReduced((prev) => !prev);

  return (
    <MotionContext.Provider
      value={{
        motionReduced,
        toggleMotion,
        shouldAnimate: !motionReduced
      }}
    >
      {/* LazyMotion with domAnimation reduces bundle by ~60% */}
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error('useMotionPreference must be used within a MotionProvider');
  }
  return context;
}
