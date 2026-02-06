import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { MotionToggle } from '@/components/ui/motion-toggle';

const navItems = [
  { label: 'Biography', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Tishnagi', href: '/tishnagi' },
  { label: 'Ghazal History', href: '/ghazal-history' },
  { label: 'Connect', href: '/contact' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { shouldAnimate } = useMotionPreference();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/10">
      <nav className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl md:text-2xl tracking-wide text-foreground hover:text-gold transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          Surinder Seerat
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`nav-link font-ui text-sm tracking-wide transition-colors duration-300 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm py-1 ${
                    location.pathname === item.href ? 'text-gold' : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Motion Toggle */}
          <div className="pl-6 border-l border-border/20">
            <MotionToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
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
            initial={shouldAnimate ? { opacity: 0, y: -20 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldAnimate ? { opacity: 0, y: -20 } : undefined}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[73px] bg-background z-50"
          >
            <div className="container mx-auto px-6 py-12">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`block py-3 font-display text-3xl focus:outline-none focus-visible:underline ${
                        location.pathname === item.href ? 'text-gold' : 'text-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Motion Toggle */}
              <div className="mt-12 pt-8 border-t border-border/20">
                <MotionToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
