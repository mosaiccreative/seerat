 import { motion } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import bookCoverImage from '@/assets/book-cover.jpg';
 
 interface BookCoverProps {
   onOpen: () => void;
   isOpening: boolean;
 }
 
 export function BookCover({ onOpen, isOpening }: BookCoverProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <motion.div
       className="fixed inset-0 z-50 flex items-center justify-center bg-ink cursor-pointer"
       initial={{ opacity: 1 }}
       animate={{ opacity: isOpening ? 0 : 1 }}
       transition={{ duration: 1.5, delay: isOpening ? 0.8 : 0 }}
       onClick={onOpen}
       style={{ pointerEvents: isOpening ? 'none' : 'auto' }}
     >
       {/* Ambient glow */}
       <div className="absolute inset-0 flex items-center justify-center">
         <motion.div
           className="w-[600px] h-[600px] rounded-full opacity-20"
           style={{
             background: 'radial-gradient(circle, hsl(38 75% 55% / 0.4) 0%, transparent 70%)',
           }}
           animate={shouldAnimate ? { scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] } : undefined}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
       </div>
 
       {/* 3D Book */}
       <motion.div
         className="relative"
         style={{
           perspective: '2000px',
           transformStyle: 'preserve-3d',
         }}
         initial={shouldAnimate ? { opacity: 0, y: 60 } : undefined}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
       >
         <motion.div
           className="relative"
           animate={shouldAnimate && !isOpening ? {
             y: [0, -15, 0],
             rotateX: [5, 7, 5],
             rotateY: [-8, -10, -8],
           } : undefined}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           style={{
             transform: 'rotateX(5deg) rotateY(-8deg)',
             transformStyle: 'preserve-3d',
           }}
         >
           {/* Book shadow */}
           <div 
             className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-black/40 blur-2xl"
             style={{ transform: 'rotateX(90deg) translateZ(-20px)' }}
           />
           
           {/* Book cover */}
           <motion.div
             className="relative w-[300px] md:w-[360px] aspect-[3/4] rounded-r-sm overflow-hidden"
             animate={isOpening ? {
               rotateY: -180,
               x: -100,
             } : undefined}
             transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
             style={{
               transformOrigin: 'left center',
               transformStyle: 'preserve-3d',
               boxShadow: '4px 4px 20px rgba(0,0,0,0.5), 20px 0 40px -10px rgba(0,0,0,0.3)',
             }}
           >
             <img
               src={bookCoverImage}
               alt="The Collected Works of Surinder Seerat"
               className="w-full h-full object-cover"
             />
             
             {/* Gold title overlay */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-8">
               <motion.div
                 className="text-center"
                 animate={shouldAnimate ? { opacity: [0.8, 1, 0.8] } : undefined}
                 transition={{ duration: 3, repeat: Infinity }}
               >
                 <h1 className="font-display text-3xl md:text-4xl text-gold mb-2 tracking-wide">
                   Surinder Seerat
                 </h1>
                 <p className="font-ui text-xs tracking-[0.4em] uppercase text-cream/70">
                   Collected Works
                 </p>
               </motion.div>
             </div>
           </motion.div>
           
           {/* Book spine */}
           <div 
             className="absolute left-0 top-0 h-full w-[20px] bg-gradient-to-r from-amber-900 to-amber-800"
             style={{
               transform: 'rotateY(-90deg) translateZ(10px)',
               transformOrigin: 'left center',
             }}
           />
           
           {/* Book pages edge */}
           <div 
             className="absolute right-0 top-0 h-full w-[15px]"
             style={{
               background: 'repeating-linear-gradient(to bottom, #f5f0e8 0px, #e8e0d4 1px, #f5f0e8 2px)',
               transform: 'translateX(5px)',
             }}
           />
         </motion.div>
       </motion.div>
 
       {/* Call to action */}
       <motion.div
         className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: isOpening ? 0 : 1 }}
         transition={{ duration: 0.5, delay: isOpening ? 0 : 2 }}
       >
         <motion.p
           className="font-ui text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
           animate={shouldAnimate ? { opacity: [0.5, 1, 0.5] } : undefined}
           transition={{ duration: 2, repeat: Infinity }}
         >
           Click to enter
         </motion.p>
         <div className="w-px h-8 bg-gold/50 mx-auto" />
       </motion.div>
     </motion.div>
   );
 }