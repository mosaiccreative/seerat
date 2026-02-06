import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import { ArrowRight, ChevronDown, BookOpen, Music, GraduationCap, Users } from 'lucide-react';
import { BookCover } from '@/components/BookCover';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { StatsSection } from '@/components/sections/StatsSection';
import { EmailCapture } from '@/components/sections/EmailCapture';
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
          {/* Hero Section */}
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
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 text-gold font-ui text-xs tracking-[0.15em] uppercase">
                  Award-Winning Punjabi Ghazal Writer
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
              >
                The Physicist Who Became a{' '}
                <span className="text-gold italic">Poet</span>
              </motion.h1>
              
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <div className="line-gold w-24" />
              </motion.div>
              
              <motion.p 
                variants={fadeUp}
                className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Exploring consciousness, longing, and the immigrant experience through the ancient art of the ghazal
              </motion.p>
              
              <motion.div 
                variants={fadeUp}
                className="mt-16 flex flex-col items-center gap-4"
              >
                <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Scroll to continue
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

          {/* Stats Section */}
          <StatsSection />

          {/* A Rare Combination */}
          <section className="page-section">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-center mb-12">
                <span className="chapter-label block">A Rare Combination</span>
                
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-8">
                  Most poets choose either{' '}
                  <span className="text-gold italic">tradition</span> or{' '}
                  <span className="text-gold italic">modernity</span>.
                </h2>
                
                <p className="text-xl md:text-2xl text-foreground mb-8">
                  Surinder masters both.
                </p>
              </div>
              
              <div className="prose-poetry text-muted-foreground space-y-6 max-w-3xl mx-auto">
                <p>
                  His ghazals maintain the <strong className="text-foreground">technical purity</strong> that won him 
                  three consecutive awards from the Jammu & Kashmir Academy of Art, Culture & Languages (1982, 1987, 1991). 
                  Yet his work explores <strong className="text-foreground">contemporary questions</strong>: consciousness 
                  and language, the immigrant experience, the limits of rational thought.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-display text-lg md:text-xl text-center">
                <span><strong className="text-gold">Physics</strong> meets mysticism.</span>
                <span className="hidden md:inline text-gold">•</span>
                <span><strong className="text-gold">Kashmir</strong> meets California.</span>
                <span className="hidden md:inline text-gold">•</span>
                <span><strong className="text-gold">Tradition</strong> meets the modern soul.</span>
              </div>
              
              <div className="mt-16 prose-poetry text-muted-foreground space-y-6 max-w-3xl mx-auto">
                <p>
                  Born in a small village in Kashmir, Surinder Singh Seerat was the{' '}
                  <strong className="text-foreground">first person in his family—and his entire village—to graduate from university</strong>. 
                  He built a career as a physics professor, taught for over twenty years, and worked in corporate America 
                  at IBM, Iomega, and the U.S. Postal Service.
                </p>
                <p>
                  But poetry called louder than any profession. In 2011, he took sabbatical to pursue what he'd been 
                  doing quietly for decades: writing ghazals that explore the mysteries of human existence.
                </p>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/about" className="text-gold font-ui text-sm tracking-wider inline-flex items-center gap-2 hover:underline">
                  Read the full story <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* The Difference */}
          <section className="page-section bg-card">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="chapter-label block">The Difference</span>
                <h2 className="font-display text-3xl md:text-5xl">
                  What Makes His Work <span className="text-gold italic">Different</span>
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'The Scientist-Poet Lens',
                    desc: "A physicist's precision applied to poetry creates something rare: technical rigor in service of mystical exploration. Surinder examines consciousness and existence from a mind trained in the exactitude of science.",
                  },
                  {
                    title: 'The Immigrant Bridge',
                    desc: "His journey—from Kashmir village to California literary leadership—embodies the diaspora experience. His poetry speaks to displacement and belonging, honoring Punjabi tradition while building something new.",
                  },
                  {
                    title: 'Literary Leadership',
                    desc: "Surinder didn't just write poetry—he built the institutions that preserve Punjabi literature in California. He founded Punjabi Sahit Sabha California (1992) and co-founded Vishav Punjabi Sahit Academy (2002).",
                  },
                  {
                    title: 'Recognition Across Continents',
                    desc: "JKAACL Best Book Awards (1982, 1987, 1991), Professor Mohan Singh Award (2014), and a 2015 National Seminar in Jammu dedicated to his creative process.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-8 border border-border/50 hover:border-gold/30 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-display text-xl md:text-2xl mb-4">{index + 1}. {item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* The Works */}
          <section className="page-section">
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
                  Eight Books, <span className="text-gold italic">34 Years</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  From 1980 to 2014, exploring themes of longing, consciousness, existence, and transformation.
                </p>
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
                      {book.award && (
                        <p className="font-ui text-[10px] text-gold/80 mt-2">🏆</p>
                      )}
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
                <Link to="/books" className="btn-gold">
                  Browse Complete Collection
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Who This Poetry Is For */}
          <section className="page-section bg-card">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="chapter-label block">Your Journey</span>
                <h2 className="font-display text-3xl md:text-5xl">
                  Who This Poetry Is <span className="text-gold italic">For</span>
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Music,
                    audience: "If you're discovering Punjabi poetry",
                    action: "Start with the Ghazal History page to understand the form, then listen to Tishnagi to experience it.",
                    link: '/ghazal-history',
                    linkText: 'Explore Ghazal History',
                  },
                  {
                    icon: BookOpen,
                    audience: "If you're a devoted reader",
                    action: "Explore the complete bibliography and discover a voice worthy of Punjab's classical tradition—recognized by four major literary awards.",
                    link: '/books',
                    linkText: 'Browse the Books',
                  },
                  {
                    icon: GraduationCap,
                    audience: "If you're a scholar or academic",
                    action: "The 2015 National Seminar in Jammu confirmed his significance. Minimal scholarship exists—opportunity to establish yourself as an authority.",
                    link: '/contact',
                    linkText: 'Research Inquiries',
                  },
                  {
                    icon: Users,
                    audience: "If you're a creative professional",
                    action: "His ghazals have cinematic soul. The Tishnagi album demonstrates musical potential. Explore collaboration possibilities.",
                    link: '/contact',
                    linkText: 'Contact for Collaboration',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.audience}
                    className="p-8 border border-border/50 hover:border-gold/30 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-8 h-8 text-gold mb-4" />
                    <h3 className="font-display text-lg md:text-xl mb-3">{item.audience}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.action}</p>
                    <Link to={item.link} className="text-gold font-ui text-xs tracking-wider flex items-center gap-1 hover:underline">
                      {item.linkText} <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* The Poet Portrait */}
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
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
                  A Voice Worth
                  <br />
                  <span className="text-gold italic">Discovering</span>
                </h2>
                
                <div className="prose-poetry text-muted-foreground space-y-4">
                  <p>
                    In a world hungry for authentic poetry, Surinder Singh Seerat offers something rare:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Technical mastery</strong> without academic sterility.</li>
                    <li><strong>Philosophical depth</strong> without abstraction.</li>
                    <li><strong>Tradition</strong> meeting modernity.</li>
                    <li><strong>The immigrant experience</strong> expressed through a form older than nations.</li>
                  </ul>
                </div>
                
                <Link to="/about" className="btn-gold mt-10 inline-flex">
                  Read Full Biography
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

          {/* Closing Quote */}
          <section className="py-32 px-6 text-center border-t border-border/30">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-2xl md:text-3xl italic text-muted-foreground mb-8 max-w-3xl mx-auto">
                "The mysteriousness of existence cannot be fully captured in language—but the attempt reveals truths rationality alone cannot access."
              </p>
              <p className="text-gold font-ui text-sm tracking-wider">— Surinder Singh Seerat</p>
              <div className="line-gold w-12 mx-auto mt-8" />
            </motion.div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-24 px-6 md:px-12 bg-card">
            <div className="max-w-2xl mx-auto">
              <EmailCapture variant="homepage" />
            </div>
          </section>

        </PageLayout>
      )}
    </div>
  );
};

export default Index;
