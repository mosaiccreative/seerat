 import { motion } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
 interface SectionHeadingProps {
   label?: string;
   title: string;
   description?: string;
   centered?: boolean;
 }
 
 export function SectionHeading({ 
   label, 
   title, 
   description, 
   centered = true 
 }: SectionHeadingProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <motion.header
       className={`mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}
       initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
     >
       {label && (
         <span className="font-ui text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
           {label}
         </span>
       )}
       <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
         {title}
       </h2>
       {description && (
         <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
           {description}
         </p>
       )}
     </motion.header>
   );
 }