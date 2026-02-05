 import { useEffect } from 'react';
 import { motion } from 'framer-motion';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
 const Policies = () => {
   const { shouldAnimate } = useMotionPreference();
 
   useEffect(() => {
     document.title = 'Policies — Surinder Seerat';
   }, []);
 
   return (
     <PageLayout>
       <section className="page-section">
         <motion.div
           className="max-w-3xl mx-auto"
           initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">
             <span className="text-gold">Legal</span> Policies
           </h1>
           
           <Tabs defaultValue="privacy" className="w-full">
             <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 bg-secondary">
               <TabsTrigger 
                 value="privacy"
                 className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
               >
                 Privacy
               </TabsTrigger>
               <TabsTrigger 
                 value="terms"
                 className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
               >
                 Terms
               </TabsTrigger>
               <TabsTrigger 
                 value="refund"
                 className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
               >
                 Refunds
               </TabsTrigger>
               <TabsTrigger 
                 value="shipping"
                 className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
               >
                 Shipping
               </TabsTrigger>
             </TabsList>
             
             <TabsContent value="privacy" className="prose-poetry">
               <h2 className="font-display text-2xl mb-6">Privacy Policy</h2>
               <div className="text-muted-foreground space-y-4">
                 <p>[PLACEHOLDER]</p>
                 <p>
                   This Privacy Policy describes how Surinder Seerat ("we", "us", or "our") 
                   collects, uses, and shares information about you when you use our website 
                   and services.
                 </p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Information We Collect</h3>
                 <p>[PLACEHOLDER: Types of information collected]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">How We Use Your Information</h3>
                 <p>[PLACEHOLDER: Usage of collected information]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Contact Us</h3>
                 <p>[PLACEHOLDER: Contact information for privacy inquiries]</p>
               </div>
             </TabsContent>
             
             <TabsContent value="terms" className="prose-poetry">
               <h2 className="font-display text-2xl mb-6">Terms of Service</h2>
               <div className="text-muted-foreground space-y-4">
                 <p>[PLACEHOLDER]</p>
                 <p>
                   By accessing and using this website, you accept and agree to be bound 
                   by the terms and provisions of this agreement.
                 </p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Use License</h3>
                 <p>[PLACEHOLDER: License terms]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Disclaimer</h3>
                 <p>[PLACEHOLDER: Disclaimer content]</p>
               </div>
             </TabsContent>
             
             <TabsContent value="refund" className="prose-poetry">
               <h2 className="font-display text-2xl mb-6">Refund Policy</h2>
               <div className="text-muted-foreground space-y-4">
                 <p>[PLACEHOLDER]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Physical Products</h3>
                 <p>[PLACEHOLDER: Refund policy for physical books]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Digital Products</h3>
                 <p>[PLACEHOLDER: Refund policy for ebooks and digital content]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Course Refunds</h3>
                 <p>[PLACEHOLDER: Refund policy for courses]</p>
               </div>
             </TabsContent>
             
             <TabsContent value="shipping" className="prose-poetry">
               <h2 className="font-display text-2xl mb-6">Shipping Policy</h2>
               <div className="text-muted-foreground space-y-4">
                 <p>[PLACEHOLDER]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Shipping Locations</h3>
                 <p>[PLACEHOLDER: Where we ship to]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Shipping Times</h3>
                 <p>[PLACEHOLDER: Expected delivery times]</p>
                 <h3 className="font-display text-lg text-foreground mt-8 mb-4">Tracking</h3>
                 <p>[PLACEHOLDER: Order tracking information]</p>
               </div>
             </TabsContent>
           </Tabs>
         </motion.div>
       </section>
     </PageLayout>
   );
 };
 
 export default Policies;