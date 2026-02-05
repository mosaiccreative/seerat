import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CinematicHero } from '@/components/sections/CinematicHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { BookCard } from '@/components/sections/BookCard';
import { QuoteBlock } from '@/components/sections/QuoteBlock';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { books } from '@/data/books';
import paperTexture from '@/assets/paper-texture.jpg';

const Index = () => {
  const { shouldAnimate } = useMotionPreference();
  const featuredBooks = books.slice(0, 4);

  return (
    <PageLayout>
      {/* Hero Section */}
      <CinematicHero />

      {/* Featured Books Section */}
      <section className="section-editorial bg-paper-warm relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover' }}
          aria-hidden="true"
        />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            label="The Works"
            title="Selected Books"
            description="Poetry and prose spanning four decades of literary exploration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredBooks.map((book, index) => (
              <BookCard
                key={book.id}
                title={book.title}
                year={book.year}
                description={book.description}
                coverImage={book.coverImage}
                award={book.award}
                index={index}
              />
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/books" className="btn-ghost group">
              View All Books
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-cinematic">
        <div className="container mx-auto max-w-3xl">
          <QuoteBlock
            quote="Koi pujjay ga merey teek meri roshni phar ke, Meri bhatkan da 'seerat' taar ke oh mull jayega"
            author="Surinder Seerat"
          />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-editorial">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            label="The Poet"
            title="A Journey Across Continents"
          />

          <motion.div
            className="prose-lantern text-center"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Seerat had a surreal journey making his way from a small village in India 
              to his current life in California. Over the years he published seven poetry books, 
              one novel, one short story and a book on Punjabi critics.
            </p>

            <div className="mt-12">
              <Link to="/about" className="btn-hero group">
                Read Full Biography
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Literary Organizations Section */}
      <section className="section-editorial bg-ink text-paper">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.span 
            className="font-ui text-xs tracking-[0.3em] uppercase text-paper/60 block mb-4"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Literary Legacy
          </motion.span>
          
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl mb-8"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Bridging Punjabi Literature
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-paper/80"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Founder of <strong className="text-paper">Punjabi Sahit Sabha California</strong> (1992)
            </p>
            <p>
              Co-founder of <strong className="text-paper">Vishav Punjabi Sahit Academy, California</strong> (2002)
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
