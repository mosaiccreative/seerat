 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { useToast } from '@/hooks/use-toast';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { Loader2, Mail, CheckCircle } from 'lucide-react';
 
 interface EmailCaptureProps {
   headline?: string;
   description?: string;
   buttonText?: string;
   variant?: 'default' | 'minimal';
   className?: string;
 }
 
 export function EmailCapture({
   headline = "Stay Updated",
   description = "Join our newsletter for the latest updates.",
   buttonText = "Subscribe",
   variant = 'default',
   className = ''
 }: EmailCaptureProps) {
   const [email, setEmail] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const { toast } = useToast();
   const { shouldAnimate } = useMotionPreference();
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     if (!email || !email.includes('@')) {
       toast({
         title: "Invalid email",
         description: "Please enter a valid email address.",
         variant: "destructive"
       });
       return;
     }
 
     setIsLoading(true);
     
     // Simulate API call - replace with actual implementation
     await new Promise(resolve => setTimeout(resolve, 1000));
     
     setIsLoading(false);
     setIsSuccess(true);
     setEmail('');
     
     toast({
       title: "Success!",
       description: "You've been added to the list.",
     });
   };
 
   if (isSuccess) {
     return (
       <motion.div 
         className={`text-center ${className}`}
         initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
         animate={{ opacity: 1, scale: 1 }}
       >
         <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
         <p className="font-display text-2xl mb-2">Thank You</p>
         <p className="text-muted-foreground">We'll be in touch soon.</p>
       </motion.div>
     );
   }
 
   return (
     <div className={className}>
       {variant === 'default' && (
         <div className="text-center mb-8">
           <h3 className="font-display text-2xl md:text-3xl mb-3">{headline}</h3>
           <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
         </div>
       )}
       
       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
         <div className="flex flex-col sm:flex-row gap-3">
           <div className="flex-1">
             <Label htmlFor="email-capture" className="sr-only">
               Email address
             </Label>
             <div className="relative">
               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <Input
                 id="email-capture"
                 type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 disabled={isLoading}
                 className="pl-10 bg-secondary border-border focus:border-gold focus:ring-gold"
                 aria-describedby="email-hint"
               />
             </div>
           </div>
           <Button 
             type="submit" 
             disabled={isLoading}
             className="bg-gold text-ink hover:bg-gold/90 font-ui tracking-wide"
           >
             {isLoading ? (
               <>
                 <Loader2 className="w-4 h-4 animate-spin" />
                 <span>Joining...</span>
               </>
             ) : (
               buttonText
             )}
           </Button>
         </div>
         <p id="email-hint" className="text-xs text-muted-foreground mt-3 text-center">
           No spam. Unsubscribe anytime.
         </p>
       </form>
     </div>
   );
 }