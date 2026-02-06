import { motion, type Easing } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ScrollCue } from '@/components/ui/scroll-cue';
import bookPages from '@/assets/book-pages.jpg';

const easeOut: Easing = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const { shouldAnimate } = useMotionPreference();

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: easeOut }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-burgundy px-6 py-24 md:py-32">
      {/* Background texture - subtle paper grain */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url(${bookPages})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
        aria-hidden="true"
      />
      
      {/* Refined gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/40 via-transparent to-burgundy-dark/60" 
        aria-hidden="true" 
      />
      
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        variants={shouldAnimate ? stagger : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={shouldAnimate ? fadeUp : undefined} className="mb-8">
          <span className="inline-block px-5 py-2.5 bg-gold/5 border border-gold/20 text-gold font-ui text-[11px] tracking-[0.2em] uppercase">
            Award-Winning Punjabi Ghazal Writer
          </span>
        </motion.div>
        
        {/* Headline with improved typography */}
        <motion.h1 
          variants={shouldAnimate ? fadeUp : undefined}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-[1.1] tracking-tight max-w-[18ch] mx-auto"
        >
          The Physicist Who Became a{' '}
          <span className="text-gold italic">Poet</span>
        </motion.h1>
        
        {/* Decorative divider */}
        <motion.div variants={shouldAnimate ? fadeUp : undefined} className="flex justify-center mb-8">
          <div className="flex items-center gap-3" aria-hidden="true">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>
        
        {/* Subhead with comfortable line length */}
        <motion.p 
          variants={shouldAnimate ? fadeUp : undefined}
          className="font-body text-lg md:text-xl text-cream/80 max-w-[55ch] mx-auto leading-relaxed"
        >
          Exploring consciousness, longing, and the immigrant experience through the ancient art of the ghazal
        </motion.p>
        
        {/* Scroll cue */}
        <motion.div 
          variants={shouldAnimate ? fadeUp : undefined}
          className="mt-20"
        >
          <ScrollCue />
        </motion.div>
      </motion.div>
    </section>
  );
}
