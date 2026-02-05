 import { Link } from 'react-router-dom';
 import { MotionToggle } from '@/components/ui/motion-toggle';
 
 export function SiteFooter() {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="border-t border-border bg-paper-warm">
       <div className="container mx-auto px-6 py-16">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
           {/* Brand */}
           <div>
             <h3 className="font-display text-2xl mb-4">Surinder Seerat</h3>
             <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
               Poet, author, and founder of literary organizations bridging 
               Punjabi literature across continents.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-ui text-xs tracking-widest uppercase text-muted-foreground mb-4">
               Explore
             </h4>
             <ul className="space-y-2">
               {['Books', 'About', 'Media', 'Contact'].map((item) => (
                 <li key={item}>
                   <Link
                     to={`/${item.toLowerCase()}`}
                     className="text-sm hover:text-accent transition-colors"
                   >
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Accessibility */}
           <div>
             <h4 className="font-ui text-xs tracking-widest uppercase text-muted-foreground mb-4">
               Accessibility
             </h4>
             <MotionToggle />
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground">
             © {currentYear} Surinder Seerat. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a 
               href="https://www.youtube.com/@SurinderSeerat" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
               aria-label="YouTube Channel"
             >
               YouTube
             </a>
             <a 
               href="https://soundcloud.com/surinder-seerat" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
               aria-label="SoundCloud Profile"
             >
               SoundCloud
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 }