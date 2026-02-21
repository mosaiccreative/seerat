'use client';

import { motion } from 'framer-motion';
import { Clock, Package, BookOpen, Sparkles } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { ProductCard } from '@/components/sections/ProductCard';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { books } from '@/data/books';

export function StorePageContent() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-section relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, hsl(38 75% 55%) 0%, transparent 60%)',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 mb-8">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-ui text-sm tracking-wide text-gold">Coming Soon</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl mb-6">
            The <span className="text-gold italic">Bookshop</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
            Physical books, ebooks, and exclusive bundles —
            bringing Surinder Seerat&apos;s works directly to your library.
          </p>

           <EmailCapture
             endpoint="store-waitlist"
             headline="Be First to Know"
             description="Get notified when the store launches with exclusive early-bird offers."
             buttonText="Notify Me"
             showFirstName
           />
        </motion.div>
      </section>

      {/* Product Preview */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Preview</span>
            <h2 className="font-display text-3xl md:text-4xl">
              What&apos;s <span className="text-gold">Coming</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.slice(0, 4).map((book) => (
              <ProductCard
                key={book.id}
                title={book.title}
                image={book.coverImage}
                format="Paperback"
                available={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Available <span className="text-gold">Formats</span>
            </h2>
            <p className="text-muted-foreground">
              Choose how you want to experience these works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: 'Physical Books',
                description: 'Premium printed editions shipped worldwide. Feel the weight of words in your hands.'
              },
              {
                icon: BookOpen,
                title: 'Digital Editions',
                description: 'Instant access on any device. Read anywhere, anytime.'
              },
              {
                icon: Sparkles,
                title: 'Signed Bundles',
                description: 'Collector\'s editions with personal inscriptions from the author.'
              }
            ].map((format, index) => (
              <motion.div
                key={format.title}
                className="p-8 border border-border/50 text-center"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <format.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-display text-xl mb-3">{format.title}</h3>
                <p className="text-muted-foreground text-sm">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Info */}
      <section className="py-16 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our collection of books, ebooks, and audiobooks is being curated for you.
            Join the waitlist above to be the first to know when the store opens —
            plus get exclusive early access and launch-day offers.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
