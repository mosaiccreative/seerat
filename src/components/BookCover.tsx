import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import seeratBook from '@/assets/seerat-book-cover.png';

interface BookCoverProps {
  onOpen: () => void;
  isOpening: boolean;
}

export function BookCover({ onOpen, isOpening }: BookCoverProps) {
  const { shouldAnimate } = useMotionPreference();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{ duration: 1.2, delay: isOpening ? 0.2 : 0 }}
      onClick={onOpen}
    >
      {/* Straight-on centered book (no perspective/tilt) */}
      <motion.div
        className="relative w-full max-w-[520px] px-6"
        initial={shouldAnimate ? { opacity: 0, scale: 0.98 } : undefined}
        animate={{
          opacity: 1,
          scale: 1,
          y: shouldAnimate && !isOpening ? [0, -8, 0] : 0,
        }}
        transition={
          shouldAnimate && !isOpening
            ? { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <motion.img
          src={seeratBook}
          alt="Surinder Seerat book cover"
          className="block mx-auto max-h-[82vh] max-w-full h-auto w-auto"
          style={{
            background: 'transparent',
            objectFit: 'contain',
            filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.65))',
          }}
          animate={
            isOpening
              ? {
                  scale: 2.2,
                }
              : undefined
          }
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 20 : 0 }}
        transition={{ duration: 0.5, delay: isOpening ? 0 : 0.9 }}
      >
        <motion.p
          className="font-ui text-xs md:text-sm tracking-[0.4em] uppercase text-foreground/60 mb-4"
          animate={shouldAnimate ? { opacity: [0.4, 0.8, 0.4] } : undefined}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Open the book
        </motion.p>
        <motion.div
          className="w-px h-10 mx-auto bg-gradient-to-b from-gold/60 to-transparent"
          animate={shouldAnimate ? { scaleY: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : undefined}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/30" />
    </motion.div>
  );
}


