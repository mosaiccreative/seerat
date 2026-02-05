 import { motion } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import seeratBook from '@/assets/seerat-book.png';
 
 interface BookCoverProps {
   onOpen: () => void;
   isOpening: boolean;
 }
 
 export function BookCover({ onOpen, isOpening }: BookCoverProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <motion.div
       className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
       style={{
         background: 'radial-gradient(ellipse at center, hsl(30 20% 12%) 0%, hsl(20 15% 6%) 100%)',
       }}
       initial={{ opacity: 1 }}
       animate={{ opacity: isOpening ? 0 : 1 }}
       transition={{ duration: 1.5, delay: isOpening ? 0.8 : 0 }}
       onClick={onOpen}
     >
       {/* Ambient warm glow */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <motion.div
           className="w-[800px] h-[800px] rounded-full"
           style={{
             background: 'radial-gradient(circle, hsl(35 60% 40% / 0.3) 0%, transparent 60%)',
           }}
           animate={shouldAnimate ? { 
             scale: [1, 1.15, 1], 
             opacity: [0.3, 0.5, 0.3] 
           } : undefined}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
         />
       </div>
 
       {/* 3D Floating Book */}
       <motion.div
         className="relative"
         style={{
           perspective: '1500px',
           transformStyle: 'preserve-3d',
         }}
         initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
       >
         <motion.div
           className="relative"
           animate={shouldAnimate && !isOpening ? {
             y: [0, -20, 0],
             rotateX: [8, 12, 8],
             rotateY: [-5, -8, -5],
             rotateZ: [-2, 0, -2],
           } : undefined}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           style={{
             transform: 'rotateX(10deg) rotateY(-5deg) rotateZ(-2deg)',
             transformStyle: 'preserve-3d',
           }}
         >
           {/* Book shadow on ground */}
           <motion.div 
             className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[80px] blur-3xl"
             style={{ 
               background: 'hsl(20 20% 5% / 0.8)',
               bottom: '-60px',
               borderRadius: '50%',
             }}
             animate={shouldAnimate && !isOpening ? {
               scale: [1, 0.9, 1],
               opacity: [0.6, 0.4, 0.6],
             } : undefined}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           />
           
           {/* Main book image */}
           <motion.div
             className="relative"
             animate={isOpening ? {
               scale: 2.5,
               rotateX: 0,
               rotateY: 0,
               rotateZ: 0,
               y: 0,
             } : undefined}
             transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
             style={{
               transformStyle: 'preserve-3d',
               filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.5)) drop-shadow(0 20px 30px rgba(0,0,0,0.4))',
             }}
           >
             <img
               src={seeratBook}
               alt="ਸਿਰਰ ਤਵੀ - Surinder Seerat"
               className="w-[380px] md:w-[480px] lg:w-[550px] h-auto"
               style={{
                 transform: 'translateZ(20px)',
               }}
             />
             
             {/* Subtle highlight overlay */}
             <div 
               className="absolute inset-0 pointer-events-none"
               style={{
                 background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
               }}
             />
           </motion.div>
         </motion.div>
       </motion.div>
 
       {/* Call to action */}
       <motion.div
         className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 text-center"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
         transition={{ duration: 0.5, delay: isOpening ? 0 : 1.5 }}
       >
         <motion.p
           className="font-ui text-xs md:text-sm tracking-[0.4em] uppercase text-cream/60 mb-4"
           animate={shouldAnimate ? { opacity: [0.4, 0.8, 0.4] } : undefined}
           transition={{ duration: 3, repeat: Infinity }}
         >
           Open the book
         </motion.p>
         <motion.div 
           className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent mx-auto"
           animate={shouldAnimate ? { scaleY: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : undefined}
           transition={{ duration: 2, repeat: Infinity }}
         />
       </motion.div>
 
       {/* Corner accents */}
       <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/20" />
       <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/20" />
       <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/20" />
       <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/20" />
     </motion.div>
   );
 }