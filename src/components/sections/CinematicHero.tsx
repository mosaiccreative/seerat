import { motion, type Easing } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMotionPreference } from '@/hooks/useMotionPreference';

const heroImage = '/images/hero-landscape.jpg';

 interface CinematicHeroProps {
   title?: string;
   subtitle?: string;
   showScrollCue?: boolean;
 }
 
 export function CinematicHero({ 
   title = "Surinder Seerat",
   subtitle = "Poet · Author · Literary Visionary",
   showScrollCue = true 
 }: CinematicHeroProps) {
   const { shouldAnimate } = useMotionPreference();
 
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.3,
         delayChildren: 0.2,
       }
     }
   };
 
  const easeOut: Easing = [0.16, 1, 0.3, 1];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: easeOut }
    }
  };
 
   return (
     <section 
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
       aria-label="Hero section"
     >
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt=""
           aria-hidden="true"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-background/40" />
         <div className="absolute inset-0 gradient-vignette opacity-60" />
       </div>
 
       {/* Content */}
       <motion.div
         className="relative z-10 text-center px-6 max-w-4xl mx-auto"
         variants={shouldAnimate ? containerVariants : undefined}
         initial={shouldAnimate ? "hidden" : undefined}
         animate="visible"
       >
         {/* Decorative Gurmukhi-inspired element */}
         <motion.div 
           variants={shouldAnimate ? itemVariants : undefined}
           className="mb-8 opacity-30"
         >
           <span className="text-4xl font-light tracking-[0.5em]">੧</span>
         </motion.div>
 
         <motion.h1 
           variants={shouldAnimate ? itemVariants : undefined}
           className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
         >
           {title}
         </motion.h1>
 
         <motion.p 
           variants={shouldAnimate ? itemVariants : undefined}
           className="font-ui text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground"
         >
           {subtitle}
         </motion.p>
 
         {/* Punjabi verse */}
         <motion.p 
           variants={shouldAnimate ? itemVariants : undefined}
           className="mt-12 font-display text-lg md:text-xl italic text-muted-foreground max-w-xl mx-auto"
         >
           "Koi pujjay ga merey teek meri roshni phar ke"
         </motion.p>
       </motion.div>
 
       {/* Scroll Cue */}
       {showScrollCue && (
         <motion.div
           className="absolute bottom-12 left-1/2 -translate-x-1/2"
           initial={shouldAnimate ? { opacity: 0 } : undefined}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
         >
           <motion.div
             animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             className="flex flex-col items-center gap-2 text-muted-foreground"
           >
             <span className="font-ui text-xs tracking-widest uppercase">Explore</span>
             <ChevronDown size={20} />
           </motion.div>
         </motion.div>
       )}
     </section>
   );
 }