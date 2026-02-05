 import { motion } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
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
           
           {/* Book cover - leather texture */}
           <motion.div
             className="relative w-[300px] md:w-[360px] aspect-[3/4] rounded-r-sm overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950"
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
             {/* Leather texture overlay */}
             <div 
               className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
               }}
             />
             
             {/* Gold border frame */}
             <div className="absolute inset-4 border border-gold/40" />
             <div className="absolute inset-6 border border-gold/20" />
             
             {/* Content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
               {/* Punjabi text - decorative header */}
               <motion.p
                 className="text-gold/60 text-lg md:text-xl mb-6 tracking-wide"
                 style={{ fontFamily: 'serif' }}
                 animate={shouldAnimate ? { opacity: [0.4, 0.7, 0.4] } : undefined}
                 transition={{ duration: 4, repeat: Infinity }}
               >
                 ਸੁਰਿੰਦਰ ਸੀਰਤ
               </motion.p>
               
               {/* Decorative line */}
               <div className="w-16 h-px bg-gold/50 mb-6" />
               
               <motion.div
                 className="text-center"
                 animate={shouldAnimate ? { opacity: [0.8, 1, 0.8] } : undefined}
                 transition={{ duration: 3, repeat: Infinity }}
               >
                 <h1 className="font-display text-3xl md:text-4xl text-gold mb-3 tracking-wide">
                   Surinder Seerat
                 </h1>
                 <p className="font-ui text-xs tracking-[0.4em] uppercase text-cream/60">
                   Collected Works
                 </p>
               </motion.div>
               
               {/* Decorative line */}
               <div className="w-16 h-px bg-gold/50 mt-6" />
               
               {/* Punjabi text - decorative footer */}
               <motion.p
                 className="text-gold/40 text-sm mt-6"
                 style={{ fontFamily: 'serif' }}
                 animate={shouldAnimate ? { opacity: [0.3, 0.5, 0.3] } : undefined}
                 transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
               >
                 ਕਾਵਿ ਸੰਗ੍ਰਹਿ
               </motion.p>
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
     </motion.div>
   );
 }