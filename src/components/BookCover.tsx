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
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{ duration: 1.8, delay: isOpening ? 0.5 : 0 }}
      onClick={onOpen}
    >
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
          {/* Subtle book shadow */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-[350px] h-[60px] blur-3xl bg-black/50"
            style={{
              bottom: '-50px',
              borderRadius: '50%',
            }}
            animate={shouldAnimate && !isOpening ? {
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.3, 0.4],
            } : undefined}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main book image */}
          <motion.div
            className="relative z-10"
            animate={isOpening ? {
              scale: 3,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              y: 0,
            } : undefined}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={seeratBook}
              alt="ਸੁਰਿੰਦਰ ਸੀਰਤ - Surinder Seerat"
              className="w-[320px] md:w-[400px] lg:w-[480px] h-auto"
              style={{
                transform: 'translateZ(20px)',
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.8))',
              }}
            />

            {/* Page spread glow on opening */}
            {isOpening && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(40 20% 92% / 0.8) 0%, transparent 70%)',
                }}
              />
            )}
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
