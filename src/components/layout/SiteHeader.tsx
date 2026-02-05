 import { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { Menu, X } from 'lucide-react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 
 const navItems = [
   { label: 'Home', href: '/' },
   { label: 'Books', href: '/books' },
   { label: 'About', href: '/about' },
   { label: 'Media', href: '/media' },
   { label: 'Contact', href: '/contact' },
 ];
 
 export function SiteHeader() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
       <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
         <Link 
           to="/" 
           className="font-display text-2xl tracking-wide hover:opacity-70 transition-opacity"
         >
           Surinder Seerat
         </Link>
 
         {/* Desktop Navigation */}
         <ul className="hidden md:flex items-center gap-8">
           {navItems.map((item) => (
             <li key={item.href}>
               <Link
                 to={item.href}
                 className={`nav-link ${location.pathname === item.href ? 'active text-foreground' : ''}`}
               >
                 {item.label}
               </Link>
             </li>
           ))}
         </ul>
 
         {/* Mobile Menu Button */}
         <button
           className="md:hidden p-2 hover:bg-secondary/50 rounded transition-colors"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
           aria-expanded={isMenuOpen}
         >
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </nav>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
             initial={shouldAnimate ? { opacity: 0, height: 0 } : false}
             animate={{ opacity: 1, height: 'auto' }}
             exit={shouldAnimate ? { opacity: 0, height: 0 } : undefined}
             transition={{ duration: 0.3 }}
             className="md:hidden bg-background border-b border-border"
           >
             <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
               {navItems.map((item) => (
                 <li key={item.href}>
                   <Link
                     to={item.href}
                     className={`block py-2 font-ui text-sm tracking-widest uppercase ${
                       location.pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                     }`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {item.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </motion.div>
         )}
       </AnimatePresence>
     </header>
   );
 }