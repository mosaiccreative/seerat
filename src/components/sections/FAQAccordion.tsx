 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from '@/components/ui/accordion';
 
 interface FAQItem {
   question: string;
   answer: string;
 }
 
 interface FAQAccordionProps {
   items: FAQItem[];
   className?: string;
 }
 
 export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
   return (
     <Accordion type="single" collapsible className={className}>
       {items.map((item, index) => (
         <AccordionItem 
           key={index} 
           value={`item-${index}`}
           className="border-border/50"
         >
           <AccordionTrigger className="font-display text-lg text-left hover:text-gold hover:no-underline transition-colors">
             {item.question}
           </AccordionTrigger>
           <AccordionContent className="text-muted-foreground leading-relaxed">
             {item.answer}
           </AccordionContent>
         </AccordionItem>
       ))}
     </Accordion>
   );
 }