import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

const stats = [
  { value: '8', label: 'Published Books' },
  { value: '4', label: 'Major Awards' },
  { value: '34', label: 'Years of Poetry' },
  { value: '2', label: 'Orgs Founded' },
];

export function StatsSection() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <section className="py-12 md:py-16 bg-cream border-y border-burgundy/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mb-2">
                {stat.value}
              </p>
              <p className="font-ui text-xs md:text-sm tracking-wider uppercase text-burgundy/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
