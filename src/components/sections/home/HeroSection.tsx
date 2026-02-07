import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ScrollCue } from '@/components/ui/scroll-cue';
import { BookshelfStage } from '@/components/bookshelf';
import { books } from '@/data/books';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { shouldAnimate } = useMotionPreference();
  
  // Trigger subtitle reveal when scroll cue enters viewport
  const { ref: scrollCueRef, inView: scrollCueInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, ease: easeOut }
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Main content area - stacked layout */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 md:pt-28">
        
        {/* Text Content - Centered above bookshelf */}
        <motion.div
          className="flex flex-col items-center text-center mb-8 md:mb-12"
          variants={shouldAnimate ? stagger : undefined}
          initial={shouldAnimate ? "hidden" : undefined}
          animate="visible"
        >
          {/* Award badge */}
          <motion.div variants={shouldAnimate ? fadeUp : undefined} className="mb-3">
            <span className="inline-block px-5 py-2.5 bg-gold/5 border border-gold/20 text-gold font-ui text-[11px] tracking-[0.2em] uppercase">
              Award-Winning Punjabi Ghazal Writer
            </span>
          </motion.div>
          
          {/* Stacked Headline */}
          <motion.h1 
            variants={shouldAnimate ? fadeUp : undefined}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            The Physicist.<br />
            The Sufi.<br />
            The <span className="text-gold italic">Poet</span>.
          </motion.h1>
          
          {/* Decorative divider */}
          <motion.div 
            variants={shouldAnimate ? fadeUp : undefined} 
            className="flex justify-center"
          >
            <div className="flex items-center gap-3" aria-hidden="true">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bookshelf - Full width below text */}
        <motion.div 
          className="w-full"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          <BookshelfStage 
            books={[...books].sort((a, b) => parseInt(a.year) - parseInt(b.year))} 
            motionEnabled={shouldAnimate}
          />
        </motion.div>

        {/* Bottom area: Scroll cue + Revealed subtitle */}
        <div ref={scrollCueRef} className="relative mt-auto pt-6 pb-8 md:pb-10">
          {/* Scroll cue */}
          <motion.div 
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mb-5"
          >
            <ScrollCue />
          </motion.div>

          {/* Subtitle - revealed on scroll */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 15 } : { opacity: 1 }}
            animate={scrollCueInView || !shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-center px-6"
          >
            <p className="font-body text-base md:text-lg text-cream/70 max-w-[50ch] mx-auto mb-3">
              Exploring consciousness, longing, and the immigrant experience through the ancient art of the ghazal
            </p>
            <span className="font-ui text-xs tracking-[0.15em] text-cream/50 uppercase">
              Poet · Novelist · Critic
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
