 import { m } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
 interface QuoteBlockProps {
   quote: string;
   author?: string;
   source?: string;
 }
 
 export function QuoteBlock({ quote, author, source }: QuoteBlockProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <m.blockquote
       className="quote-block"
       initial={shouldAnimate ? { opacity: 0, x: -20 } : undefined}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
     >
       <p className="font-display text-xl md:text-2xl italic leading-relaxed mb-4">
         {quote}
       </p>
       {(author || source) && (
         <footer className="font-ui text-sm text-muted-foreground">
           {author && <span className="font-medium">{author}</span>}
           {author && source && <span className="mx-2">—</span>}
           {source && <cite className="not-italic">{source}</cite>}
         </footer>
       )}
     </m.blockquote>
   );
 }