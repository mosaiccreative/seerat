import { Link } from 'react-router-dom';
import { MotionToggle } from '@/components/ui/motion-toggle';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl mb-4">Surinder Seerat</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Poet, author, and founder of literary organizations bridging 
              Punjabi literature across continents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {['Books', 'About', 'Media', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
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
            © {currentYear} Surinder Seerat
          </p>
          <div className="flex gap-8">
            <a 
              href="https://www.youtube.com/@SurinderSeerat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-ui text-xs tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              YouTube
            </a>
            <a 
              href="https://soundcloud.com/surinder-seerat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-ui text-xs tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}