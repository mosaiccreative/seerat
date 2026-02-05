 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Send, Mail } from 'lucide-react';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 import { Label } from '@/components/ui/label';
 import { useToast } from '@/hooks/use-toast';
 
 const Contact = () => {
   const { shouldAnimate } = useMotionPreference();
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // Simulate form submission
     await new Promise(resolve => setTimeout(resolve, 1000));
     
     toast({
       title: "Message sent",
       description: "Thank you for reaching out. We'll respond shortly.",
     });
     
     setIsSubmitting(false);
     (e.target as HTMLFormElement).reset();
   };
 
   return (
     <PageLayout>
       {/* Hero Section */}
       <section className="pt-32 pb-20 px-6">
         <div className="container mx-auto max-w-4xl">
           <motion.div
             className="text-center"
             initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="font-ui text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
               Get in Touch
             </span>
             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
               Contact
             </h1>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               For inquiries about events, readings, book purchases, or literary collaborations.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Contact Form */}
       <section className="section-editorial bg-paper-warm">
         <div className="container mx-auto max-w-xl">
           <motion.form
             onSubmit={handleSubmit}
             className="space-y-6"
             initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <Label htmlFor="name" className="font-ui text-sm">
                   Name
                 </Label>
                 <Input
                   id="name"
                   name="name"
                   required
                   className="bg-background border-border/50 focus:border-accent"
                 />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="email" className="font-ui text-sm">
                   Email
                 </Label>
                 <Input
                   id="email"
                   name="email"
                   type="email"
                   required
                   className="bg-background border-border/50 focus:border-accent"
                 />
               </div>
             </div>
 
             <div className="space-y-2">
               <Label htmlFor="subject" className="font-ui text-sm">
                 Subject
               </Label>
               <Input
                 id="subject"
                 name="subject"
                 required
                 className="bg-background border-border/50 focus:border-accent"
               />
             </div>
 
             <div className="space-y-2">
               <Label htmlFor="message" className="font-ui text-sm">
                 Message
               </Label>
               <Textarea
                 id="message"
                 name="message"
                 rows={6}
                 required
                 className="bg-background border-border/50 focus:border-accent resize-none"
               />
             </div>
 
             <Button
               type="submit"
               disabled={isSubmitting}
               className="w-full btn-hero"
             >
               {isSubmitting ? (
                 'Sending...'
               ) : (
                 <>
                   Send Message
                   <Send size={16} />
                 </>
               )}
             </Button>
           </motion.form>
 
           {/* Alternative Contact */}
           <motion.div
             className="mt-16 pt-16 border-t border-border/50 text-center"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             <p className="text-muted-foreground text-sm mb-4">
               Or reach out directly via email
             </p>
             <a
               href="mailto:contact@surinderseerat.com"
               className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
             >
               <Mail size={18} />
               <span className="font-ui text-sm tracking-wide">contact@surinderseerat.com</span>
             </a>
           </motion.div>
         </div>
       </section>
     </PageLayout>
   );
 };
 
 export default Contact;