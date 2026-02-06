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
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
      
      <div className="space-y-8 md:space-y-6">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={item.year}
              className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8"
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {/* Left content */}
              <div className={`text-right ${isLeft ? '' : 'md:invisible'}`}>
                {isLeft && (
                  <>
                    <span className="hidden md:inline text-muted-foreground text-sm leading-relaxed">
                      {item.event}
                    </span>
                  </>
                )}
                {!isLeft && (
                  <span className="hidden md:inline font-display text-lg text-gold">
                    {item.year}
                  </span>
                )}
              </div>
              
              {/* Center dot and year */}
              <div className="flex flex-col items-center z-10">
                <div className="w-3 h-3 rounded-full bg-gold border-2 border-background" />
              </div>
              
              {/* Right content */}
              <div className={`text-left ${!isLeft ? '' : 'md:invisible'}`}>
                {!isLeft && (
                  <>
                    <span className="hidden md:inline text-muted-foreground text-sm leading-relaxed">
                      {item.event}
                    </span>
                  </>
                )}
                {isLeft && (
                  <span className="hidden md:inline font-display text-lg text-gold">
                    {item.year}
                  </span>
                )}
              </div>
              
              {/* Mobile: show all content below dot */}
              <div className="col-span-3 md:hidden text-center -mt-2">
                <span className="font-display text-base text-gold block mb-1">{item.year}</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{item.event}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
