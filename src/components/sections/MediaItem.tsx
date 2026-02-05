 import { motion } from 'framer-motion';
 import { ExternalLink } from 'lucide-react';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
 interface MediaItemProps {
   outlet: string;
   title: string;
   url: string;
   date?: string;
   index?: number;
 }
 
 export function MediaItem({ outlet, title, url, date, index = 0 }: MediaItemProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <motion.a
       href={url}
       target="_blank"
       rel="noopener noreferrer"
       className="group block p-6 border border-border/50 hover:border-border hover:bg-card transition-all duration-300"
       initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: shouldAnimate ? index * 0.05 : 0 }}
     >
       <div className="flex items-start justify-between gap-4">
         <div className="flex-1">
           <span className="font-ui text-xs text-accent tracking-wide uppercase block mb-2">
             {outlet}
           </span>
           <h3 className="font-display text-lg group-hover:text-accent transition-colors">
             {title}
           </h3>
           {date && (
             <span className="font-ui text-xs text-muted-foreground mt-2 block">
               {date}
             </span>
           )}
         </div>
         <ExternalLink 
           size={16} 
           className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" 
         />
       </div>
     </motion.a>
   );
 }