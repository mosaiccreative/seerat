import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

const differenceItems = [
  {
    title: 'The Scientist-Poet Lens',
    desc: "A physicist's precision applied to poetry creates something rare: technical rigor in service of mystical exploration. Surinder examines consciousness and existence from a mind trained in the exactitude of science.",
  },
  {
    title: 'The Immigrant Bridge',
    desc: "His journey—from Kashmir village to California literary leadership—embodies the diaspora experience. His poetry speaks to displacement and belonging, honoring Punjabi tradition while building something new.",
  },
  {
    title: 'Literary Leadership',
    desc: "Surinder didn't just write poetry—he built the institutions that preserve Punjabi literature in California. He founded Punjabi Sahit Sabha California (1992) and co-founded Vishav Punjabi Sahit Academy (2002).",
  },
  {
    title: 'Recognition Across Continents',
    desc: "JKAACL Best Book Awards (1982, 1987, 1991), Professor Mohan Singh Award (2014), and a 2015 National Seminar in Jammu dedicated to his creative process.",
  },
];

export function DifferenceSection() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-burgundy">
      <div className="max-w-5xl mx-auto">
        <CinematicReveal className="text-center mb-16 md:mb-20">
          <span className="chapter-label block mb-4">The Difference</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            What Makes His Work <span className="text-gold italic">Different</span>
          </h2>
        </CinematicReveal>
        
        <DecorativeDivider variant="stamp" className="mb-16" />
        
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.12}>
          {differenceItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative p-8 md:p-10 border border-cream/10 hover:border-gold/30 transition-colors duration-500 focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 focus-within:ring-offset-burgundy"
              whileHover={shouldAnimate ? { y: -2 } : undefined}
              transition={{ duration: 0.3 }}
            >
              {/* Museum label style number */}
              <span className="absolute top-4 right-4 font-ui text-[10px] text-gold/40 tracking-wider">
                0{index + 1}
              </span>
              
              <h3 className="font-display text-xl md:text-2xl text-cream mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-cream/60 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
              
              {/* Subtle bottom accent line */}
              <div 
                className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true" 
              />
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
