 import { motion } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { ExternalLink } from 'lucide-react';
 
 interface AnswerBlockProps {
   id: string;
   question: string;
   answer: string;
   sourceLabel?: string;
   sourceUrl?: string;
   className?: string;
 }
 
 export function AnswerBlock({
   id,
   question,
   answer,
   sourceLabel,
   sourceUrl,
   className = ''
 }: AnswerBlockProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <motion.article
       id={id}
       className={`scroll-mt-24 ${className}`}
       initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
       itemScope
       itemType="https://schema.org/Question"
     >
       <h3 
         className="font-display text-xl md:text-2xl mb-4 text-gold"
         itemProp="name"
       >
         {question}
       </h3>
       
       <div 
         itemScope 
         itemType="https://schema.org/Answer" 
         itemProp="acceptedAnswer"
       >
         <p 
           className="text-foreground/90 leading-relaxed text-lg"
           itemProp="text"
         >
           {answer}
         </p>
       </div>
       
       {sourceLabel && sourceUrl && (
         <a
           href={sourceUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 mt-4 font-ui text-xs tracking-wide text-muted-foreground hover:text-gold transition-colors"
         >
           <span>Source: {sourceLabel}</span>
           <ExternalLink className="w-3 h-3" />
         </a>
       )}
     </motion.article>
   );
 }