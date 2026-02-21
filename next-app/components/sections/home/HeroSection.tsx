import { m } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { BookshelfStage } from '@/components/bookshelf';
import { books } from '@/data/books';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { shouldAnimate } = useMotionPreference();

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

  const _fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: easeOut }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col">
      {/* Main content area - full bleed, content constrained inside */}
      <div className="flex-1 flex items-center w-full pt-20 md:pt-24 lg:pt-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          
          {/* Left Column: Text Content - CSS fallback ensures visibility before JS */}
          <m.div
            className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 opacity-100"
            variants={shouldAnimate ? stagger : undefined}
            initial={shouldAnimate ? "hidden" : false}
            animate="visible"
          >
            {/* Stacked Headline */}
            <m.h1 
              variants={shouldAnimate ? fadeUp : undefined}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              The Physicist.<br />
              The Writer.<br />
              The <span className="text-gold italic">Poet</span>.
            </m.h1>
            
            {/* Decorative divider */}
            <m.div 
              variants={shouldAnimate ? fadeUp : undefined} 
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="w-12 h-px bg-gold/30" />
                <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
                <div className="w-12 h-px bg-gold/30" />
              </div>
            </m.div>
            
            {/* Award badge */}
            <m.div variants={shouldAnimate ? fadeUp : undefined} className="mb-3">
              <span className="inline-block px-5 py-2.5 bg-gold/5 border border-gold/20 text-gold font-ui text-[11px] tracking-[0.2em] uppercase">
                Award-Winning Punjabi Ghazals and Novel.
              </span>
            </m.div>
            
            {/* Sub-badge */}
            <m.div variants={shouldAnimate ? fadeUp : undefined}>
              <span className="font-ui text-xs tracking-[0.15em] text-cream/60 uppercase">
                Editor · Critic
              </span>
            </m.div>
          </m.div>
          
          {/* Right Column: Bookshelf */}
          <m.div
            className="flex items-center justify-center order-1 lg:order-2 lg:max-h-[60vh]"
            initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            <BookshelfStage
              books={[...books].sort((a, b) => parseInt(a.year) - parseInt(b.year))}
              motionEnabled={shouldAnimate}
            />
          </m.div>
        </div>
      </div>

      {/* Bottom area: Subtitle - nicely positioned within hero */}
      <div className="relative pb-12 md:pb-16 lg:pb-20">
        <m.p
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: easeOut }}
          className="font-body text-base md:text-lg text-cream/70 text-center max-w-[50ch] mx-auto px-6"
        >
          Exploring consciousness, longing, and the immigrant experience through the ancient art of the ghazal.
        </m.p>
      </div>
    </section>
  );
}
