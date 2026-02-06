import { Link } from 'react-router-dom';
import { MotionToggle } from '@/components/ui/motion-toggle';
import { Instagram, Youtube, Music } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/surinderseerat',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@SurinderSinghSeerat',
      icon: Youtube,
    },
    {
      name: 'SoundCloud',
      href: 'https://soundcloud.com/surinderseerat',
      icon: Music,
    },
  ];

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl mb-4">Surinder Seerat</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Poet, author, and founder of literary organizations bridging 
              Punjabi literature across continents.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Biography', href: '/about' },
                { label: 'Books', href: '/books' },
                { label: 'Tishnagi', href: '/tishnagi' },
                { label: 'Ghazal History', href: '/ghazal-history' },
                { label: 'Connect', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accessibility */}
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Preferences
            </h4>
            <MotionToggle />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Surinder Seerat. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              to="/policies"
              className="font-ui text-xs tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Policies
            </Link>
            <Link
              to="/contact"
              className="font-ui text-xs tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
