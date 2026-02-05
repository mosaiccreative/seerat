import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';

const navItems = [
  { label: 'Works', href: '/books' },
  { label: 'About', href: '/about' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { shouldAnimate } = useMotionPreference();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
      <nav className="container mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl md:text-2xl tracking-wide text-foreground hover:text-gold transition-colors duration-500"
        >
          Surinder Seerat
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'text-gold' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
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
            className="md:hidden fixed inset-0 top-16 bg-background z-50"
          >
            <ul className="container mx-auto px-6 py-12 flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`block py-3 font-display text-3xl ${
                      location.pathname === item.href ? 'text-gold' : 'text-foreground'
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