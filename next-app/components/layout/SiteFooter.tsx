'use client';

import Link from 'next/link';
import { MotionToggle } from '@/components/ui/motion-toggle';
import { ExternalLink } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const connectLinks = [
    { label: 'Contact', href: '/contact', external: false },
    { label: 'Instagram', href: 'https://www.instagram.com/surinderseerat', external: true },
    { label: 'YouTube', href: 'https://www.youtube.com/@SurinderSinghSeerat', external: true },
    { label: 'SoundCloud', href: 'https://soundcloud.com/surinderseerat', external: true },
  ];

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl text-gold mb-4">Surinder Singh Seerat</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Award-winning Punjabi ghazal master exploring consciousness, longing, and the immigrant experience through poetry.
            </p>

            {/* Easter Egg Quote */}
            <p className="text-xs italic text-gold/80 leading-relaxed max-w-md">
              &quot;A word&apos;s definition is trapped within the word itself.&quot;
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Biography', href: '/about' },
                { label: 'Books', href: '/books' },
                { label: 'Tishnagi Album', href: '/tishnagi' },
                { label: 'Ghazal History', href: '/ghazal-history' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Surinder Seerat. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <MotionToggle />
            <Link
              href="/policies"
              className="font-ui text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/policies?tab=terms"
              className="font-ui text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/policies?tab=refund"
              className="font-ui text-xs tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
