import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { books } from '@/data/books';
import poetPortrait from '@/assets/poet-portrait.jpg';
import bookPages from '@/assets/book-pages.jpg';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const Index = () => {
  const { shouldAnimate } = useMotionPreference();
  const [bookOpened, setBookOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenBook = () => {
    setIsOpening(true);

    setTimeout(() => {
      setBookOpened(true);
      setTimeout(() => setShowContent(true), 100);
    }, shouldAnimate ? 2000 : 100);
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: easeOut }
    }
  };

  return (
    <div className="noise-overlay">
      {/* Book Cover Intro */}
      <AnimatePresence>
        {!bookOpened && (
          <BookCover onOpen={handleOpenBook} isOpening={isOpening} />
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      {showContent && (
        <PageLayout>
          {/* Chapter 1: Opening */}
          <section className="page-section relative overflow-hidden">
            {/* Background texture */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{ 
                backgroundImage: `url(${bookPages})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            
            <motion.div
              className="relative z-10 text-center max-w-4xl mx-auto"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeUp} className="chapter-label block">
                Chapter One
              </motion.span>
              
              <motion.h1 
                variants={fadeUp}
                className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-none"
              >
                <span className="text-gold">Surinder</span>
                <br />
                <span className="italic font-normal">Seerat</span>
              </motion.h1>
              
              <motion.div variants={fadeUp} className="flex justify-center mb-12">
                <div className="line-gold w-24" />
              </motion.div>
              
              <motion.p 
                variants={fadeUp}
                className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Poet. Author. Visionary.
                <br />
                <span className="text-gold/80">Eight published works</span> spanning five decades of literary exploration.
              </motion.p>
              
              <motion.div 
                variants={fadeUp}
                className="mt-16 flex flex-col items-center gap-4"
              >
                <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Scroll to continue reading
                </span>
                <motion.div
                  animate={shouldAnimate ? { y: [0, 8, 0] } : undefined}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="text-gold" size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Chapter 2: The Verse */}
          <section className="page-section bg-card">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="chapter-label block">The Verse</span>
              
              <blockquote className="quote-block text-left md:text-center pl-0 md:pl-0">
                <p className="font-display text-2xl md:text-4xl lg:text-5xl italic leading-relaxed mb-8">
                  "Koi pujjay ga merey teek meri roshni phar ke"
                </p>
                <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-muted-foreground leading-relaxed">
                  "Meri bhatkan da 'seerat' taar ke oh mull jayega"
                </p>
              </blockquote>
              
              <div className="mt-12 flex justify-center">
                <div className="line-gold w-16" />
              </div>
              
              <p className="mt-8 font-ui text-sm text-muted-foreground tracking-wide">
                — From the collected ghazals
              </p>
            </motion.div>
          </section>

          {/* Chapter 3: The Poet */}
          <section className="page-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="chapter-label block">The Poet</span>
                
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
                  A Journey Across
                  <br />
                  <span className="text-gold italic">Continents</span>
                </h2>
                
                <div className="prose-poetry text-muted-foreground space-y-6">
                  <p className="drop-cap">
                    Seerat had a surreal journey making his way from a small village in India 
                    to his current life in California.
                  </p>
                  <p>
                    Over the years he published eight poetry books, one novel, one short story 
                    and a book on Punjabi critics — a lifetime devoted to the rhythm of words.
                  </p>
                </div>
                
                <Link to="/about" className="btn-gold mt-10 inline-flex">
                  Read Full Story
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Gold frame accent */}
                  <div className="absolute -inset-4 border border-gold/30" />
                  <div className="absolute -inset-8 border border-gold/10" />
                  
                  <img
                    src={poetPortrait}
                    alt="Surinder Seerat"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Chapter 4: The Works */}
          <section className="page-section bg-card">
            <div className="max-w-6xl mx-auto w-full">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="chapter-label block">The Works</span>
                <h2 className="font-display text-4xl md:text-6xl">
                  Eight <span className="text-gold italic">Published</span> Books
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {books.slice(0, 8).map((book, index) => (
                  <motion.div
                    key={book.id}
                    className="group relative aspect-[3/4] overflow-hidden bg-secondary"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {book.coverImage && (
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="font-ui text-xs text-gold mb-1">{book.year}</p>
                      <h3 className="font-display text-sm md:text-lg leading-tight">{book.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Link to="/books" className="btn-minimal">
                  Explore All Works
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Chapter 5: Legacy */}
          <section className="page-section relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[800px] h-[800px] rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, hsl(38 75% 55%) 0%, transparent 60%)',
                }}
              />
            </div>
            
            <motion.div
              className="relative z-10 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <span className="chapter-label block">The Legacy</span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12">
                Bridging <span className="text-gold">Punjabi Literature</span>
                <br />
                Across Continents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 border border-border/50 text-left">
                  <span className="text-gold font-ui text-xs tracking-widest">1992</span>
                  <h3 className="font-display text-xl md:text-2xl mt-2 mb-3">
                    Punjabi Sahit Sabha California
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Founded a new era of Punjabi Literature in California
                  </p>
                </div>
                
                <div className="p-8 border border-border/50 text-left">
                  <span className="text-gold font-ui text-xs tracking-widest">2002</span>
                  <h3 className="font-display text-xl md:text-2xl mt-2 mb-3">
                    Vishav Punjabi Sahit Academy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Co-founded a seasoned organization for literary excellence
                  </p>
                </div>
              </div>
              
              <Link to="/about" className="btn-gold">
                Discover the Journey
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </section>

          {/* Closing */}
          <section className="py-32 px-6 text-center border-t border-border/30">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-3xl md:text-4xl italic text-muted-foreground mb-8">
                "The word's definition is trapped within the word itself"
              </p>
              <div className="line-gold w-12 mx-auto" />
            </motion.div>
          </section>
 
           {/* SEO Answer Blocks */}
           <section className="py-20 px-6 md:px-12 bg-card">
             <div className="max-w-3xl mx-auto space-y-16">
               <AnswerBlock
                 id="who-is-surinder-seerat"
                 question="Who is Surinder Seerat?"
                 answer="Surinder Seerat is a renowned Punjabi poet and author who has published eight books spanning five decades. Born in a small village in India, he made his way to California where he founded Punjabi Sahit Sabha California in 1992 and co-founded Vishav Punjabi Sahit Academy in 2002, bridging Punjabi literature across continents."
                 sourceLabel="Official Biography"
                 sourceUrl="https://www.surinderseerat.com/"
               />
               
               <AnswerBlock
                 id="published-works-count"
                 question="How many books has Surinder Seerat written?"
                 answer="Surinder Seerat has published eight works including poetry collections in open verse, ghazals, a novel (Bharam Bhullayan), and literary criticism. Three of his books received the Best Book Award from J&K Academy of Art Culture and Languages."
                 sourceLabel="Complete Works"
                 sourceUrl="https://www.surinderseerat.com/books/"
               />
             </div>
           </section>
        </PageLayout>
      )}
    </div>
  );
};

export default Index;
