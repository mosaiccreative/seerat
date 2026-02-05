 import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
 
 interface MotionContextType {
   motionReduced: boolean;
   toggleMotion: () => void;
   shouldAnimate: boolean;
 }
 
 const MotionContext = createContext<MotionContextType | undefined>(undefined);
 
 export function MotionProvider({ children }: { children: ReactNode }) {
   const [motionReduced, setMotionReduced] = useState(() => {
     // Check localStorage first
     const stored = localStorage.getItem('motion-reduced');
     if (stored !== null) return stored === 'true';
     
     // Then check system preference
     if (typeof window !== 'undefined') {
       return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
     }
     return false;
   });
 
   useEffect(() => {
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
       {children}
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