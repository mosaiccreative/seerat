'use client';

import { m } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { getVerifiedPress } from '@/data/media';

export function MediaPageContent() {
  const { shouldAnimate } = useMotionPreference();
  const pressItems = getVerifiedPress();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto text-center">
          <m.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">Press & Appearances</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
              In the <span className="text-gold italic">Media</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Coverage, interviews, and features from publications across India and beyond.
            </p>
          </m.div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <m.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Editorial Coverage</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Press & <span className="text-gold">Mentions</span>
            </h2>
          </m.div>

          <div className="space-y-4">
            {pressItems.map((item, index) => (
              <m.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 border border-border/50 hover:border-gold/50 transition-all duration-500"
                initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div>
                  <span className="font-ui text-xs text-gold tracking-wider uppercase block mb-1">
                    {item.outlet}
                  </span>
                  <h3 className="font-display text-lg md:text-xl group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-gold transition-colors shrink-0 ml-4" />
              </m.a>
            ))}
          </div>
        </div>
      </section>

      {/* Recordings */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <m.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Listen & Watch</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Recordings & <span className="text-gold">Appearances</span>
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <m.a
              href="https://www.youtube.com/@SurinderSeerat"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 border border-border/50 hover:border-gold/50 transition-all duration-500"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 border border-gold/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl group-hover:text-gold transition-colors duration-300">
                    YouTube
                  </h3>
                  <p className="text-muted-foreground text-sm">Video recordings</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Watch poetry readings, interviews, and literary event coverage.
              </p>
            </m.a>

            <m.a
              href="https://soundcloud.com/surinderseerat"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 border border-border/50 hover:border-gold/50 transition-all duration-500"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 border border-gold/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.01-.057-.049-.1-.099-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.283c.013.06.045.094.104.094.057 0 .094-.034.104-.094l.199-1.283-.2-1.332c-.009-.06-.047-.094-.104-.094zm1.79-1.188c-.066 0-.109.053-.114.108l-.196 2.563.196 2.435c.005.055.048.104.114.104.06 0 .105-.049.114-.104l.225-2.435-.225-2.563c-.009-.055-.054-.108-.114-.108z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl group-hover:text-gold transition-colors duration-300">
                    SoundCloud
                  </h3>
                  <p className="text-muted-foreground text-sm">Audio recordings</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Listen to ghazal recitations and poetry audio recordings.
              </p>
            </m.a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
