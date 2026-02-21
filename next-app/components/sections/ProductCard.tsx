'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ShoppingCart } from 'lucide-react';
 
 interface ProductCardProps {
   title: string;
   price?: string;
   format?: string;
   image?: string;
   available?: boolean;
   className?: string;
 }
 
 export function ProductCard({
   title,
   price = 'Coming Soon',
   format = 'Paperback',
   image,
   available = false,
   className = ''
 }: ProductCardProps) {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <m.div
       className={`group relative overflow-hidden bg-card border border-border/50 ${className}`}
       initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
     >
       {/* Image */}
      <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-muted-foreground">Cover</span>
          </div>
        )}
      </div>
       
       {/* Content */}
       <div className="p-4 md:p-6">
         <span className="font-ui text-xs text-gold tracking-wider uppercase">
           {format}
         </span>
         <h3 className="font-display text-lg md:text-xl mt-2 mb-3 line-clamp-2">
           {title}
         </h3>
         <div className="flex items-center justify-between gap-4">
           <span className="font-display text-xl text-foreground">
             {price}
           </span>
           <Button
             size="sm"
             disabled={!available}
             className="bg-gold text-ink hover:bg-gold/90 disabled:opacity-50"
           >
             <ShoppingCart className="w-4 h-4" />
             <span>{available ? 'Add' : 'Soon'}</span>
           </Button>
         </div>
       </div>
     </m.div>
   );
 }