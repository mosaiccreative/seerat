import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

interface TimelineItem {
  year: string;
  event: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

export function VerticalTimeline({ items }: VerticalTimelineProps) {
  const { shouldAnimate } = useMotionPreference();

  return (
    <div className="relative">
      {/* Center vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/40 md:-translate-x-1/2" />
      
      <div className="space-y-8">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={item.year}
              className="relative"
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {/* Desktop layout - alternating */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
                {/* Left content */}
                <div className={`text-right ${isLeft ? '' : 'opacity-0'}`}>
                  {isLeft && (
                    <div className="pr-4">
                      <span className="font-display text-xl text-gold block mb-1">{item.year}</span>
                      <span className="text-muted-foreground text-sm leading-relaxed">{item.event}</span>
                    </div>
                  )}
                </div>
                
                {/* Center dot */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                </div>
                
                {/* Right content */}
                <div className={`text-left ${!isLeft ? '' : 'opacity-0'}`}>
                  {!isLeft && (
                    <div className="pl-4">
                      <span className="font-display text-xl text-gold block mb-1">{item.year}</span>
                      <span className="text-muted-foreground text-sm leading-relaxed">{item.event}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile layout - all left-aligned */}
              <div className="md:hidden flex items-start gap-6 pl-2">
                {/* Dot */}
                <div className="relative z-10 mt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_6px_rgba(212,175,55,0.4)]" />
                </div>
                
                {/* Content */}
                <div>
                  <span className="font-display text-lg text-gold block mb-0.5">{item.year}</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item.event}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
