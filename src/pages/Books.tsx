import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { ScrollFadeIn } from '@/components/animations';
import { books } from '@/data/books';
import { useEffect, useState } from 'react';
import { ArrowRight, Award, BookOpen, Music, Users } from 'lucide-react';

// Enhanced book data with "who it's for" from the content docs
const enhancedBooks = [
  {
    id: 'chhallan',
    subtitle: 'The Dance of Internal Struggle',
    theme: 'The internal struggle to exist',
    whoFor: ['Readers drawn to existential themes', 'Those appreciating raw, unpolished emotional honesty', 'Anyone exploring the darker corners of consciousness'],
  },
  {
    id: 'khalaw-ch-tangey-harf',
    subtitle: 'Alone with Hanging Words',
    theme: 'The transformation from introvert to extravert',
    whoFor: ['Introverts navigating social expectations', 'Those experiencing personal transformation', 'Readers interested in psychological poetry'],
  },
  {
    id: 'bharam-bhullayan',
    subtitle: 'Illusions and Labyrinths',
    theme: 'The maze of perception and reality',
    whoFor: ['Readers of experimental fiction', 'Those who enjoyed Woolf, Joyce, Faulkner', 'Anyone questioning the nature of reality and perception'],
  },
  {
    id: 'kirchan',
    subtitle: 'Splinters: Pure Ghazal Form',
    theme: 'Hidden realities beneath surface life',
    whoFor: ['Ghazal purists appreciating technical excellence', 'Readers seeking depth beneath everyday existence', 'Literary scholars analyzing contemporary ghazal form'],
  },
  {
    id: 'kikkar-kande',
    subtitle: 'Acacia Thorns',
    theme: 'Symbolic subjectivity meets technical poetry',
    whoFor: ['Readers who enjoy symbolic poetry', 'Those interested in the immigrant experience', 'Poetry lovers appreciating formal variety'],
  },
  {
    id: 'surat-seerat-te-saraab',
    subtitle: 'Form, Character, and Mirage',
    theme: 'Unachievable life desires in humanity\'s wilderness',
    whoFor: ['Anyone who\'s chased something forever out of reach', 'Readers drawn to themes of longing', 'Those appreciating the beauty of unfulfilled desire'],
  },
  {
    id: 'saij-sullee-te-saleeb',
    subtitle: 'Marriage Bed, Scaffold, and Cross',
    theme: 'Three life stages—self, cause, humanity',
    whoFor: ['Readers exploring life\'s purpose and meaning', 'Those interested in spiritual evolution', 'Anyone asking "What am I living for?"'],
  },
  {
    id: 'aroope-akhran-da-aks',
    subtitle: 'The Reflection of Incomparable Letters',
    theme: 'The mysteriousness of the modern world',
    whoFor: ['Readers navigating modern life\'s complexity', 'Those appreciating philosophical inquiry', 'Anyone feeling the mystery beneath technological surfaces'],
  },
];

const readingPaths = [
  {
    title: 'Award-Winning Introduction',
    icon: Award,
    description: 'Start with books that earned major literary recognition',
    books: ['Kirchan (1990)', 'Aroope Akhran da Aks (2014)', 'Chhallan (1980)'],
    why: 'Let award-winning work prove the quality. Three different forms showcase his range.',
  },
  {
    title: 'Thematic Journey Through Longing',
    icon: Music,
    description: 'Follow the evolution of desire and unfulfillment',
    books: ['Listen: Tishnagi album', 'Surat Seerat Te Saraab (2007)', 'Saij Sullee Te Saleeb (2007)'],
    why: 'For those drawn to themes of longing, meaning, and the human journey toward what remains forever incomplete.',
  },
  {
    title: 'The Immigrant Voice',
    icon: Users,
    description: 'Experience poetry exploring displacement, roots, and building new ground',
    books: ['Kikkar Kande (1992)', 'Saij Sullee Te Saleeb (2007)', 'Aroope Akhran da Aks (2014)'],
    why: 'If you\'re diaspora seeking poetry that honors tradition while speaking to contemporary immigrant experience.',
  },
  {
    title: 'Technical Mastery for Poetry Lovers',
    icon: BookOpen,
    description: 'Appreciate the evolution of form and craft',
    books: ['Chhallan (1980)', 'Kirchan (1990)', 'Aroope Akhran da Aks (2014)'],
    why: 'Watch a poet master multiple forms across 34 years. Perfect for students of poetry craft.',
  },
];

const Books = () => {
  const { shouldAnimate } = useMotionPreference();
  const [activeTab, setActiveTab] = useState<'collection' | 'paths'>('collection');

  useEffect(() => {
    document.title = 'Eight Books, 34 Years, Four Major Awards — Surinder Seerat';
  }, []);

  const getEnhancedData = (bookId: string) => {
    return enhancedBooks.find(b => b.id === bookId);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Collection</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
              Eight Books, <span className="text-gold italic">34 Years</span>,
              <br />Four Major Awards
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore poetry collections spanning free verse to pure ghazal form—from <em>Chhallan</em> (1980) to <em>Aroope Akhran da Aks</em> (2014)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Answer Block for SEO */}
      <section className="py-12 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-3xl mx-auto">
          <AnswerBlock
            id="published-works"
            question="How many books has Surinder Seerat published?"
            answer="Surinder Seerat has published eight works spanning 34 years (1980-2014). His collection includes seven poetry volumes exploring free verse, open verse, and pure ghazal forms, plus one novel using stream of consciousness. Four of his works received major literary awards from the Jammu & Kashmir Academy and North American institutions."
            sourceLabel="Official Works Collection"
            sourceUrl="https://www.surinderseerat.com/books/"
          />
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl mx-auto flex justify-center gap-8">
          <button
            onClick={() => setActiveTab('collection')}
            className={`font-ui text-sm tracking-wider py-2 border-b-2 transition-colors ${
              activeTab === 'collection' 
                ? 'border-gold text-gold' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            THE COMPLETE COLLECTION
          </button>
          <button
            onClick={() => setActiveTab('paths')}
            className={`font-ui text-sm tracking-wider py-2 border-b-2 transition-colors ${
              activeTab === 'paths' 
                ? 'border-gold text-gold' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            RECOMMENDED READING PATHS
          </button>
        </div>
      </section>

      {activeTab === 'collection' ? (
        /* Books Grid */
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book, index) => {
                const enhanced = getEnhancedData(book.id);
                return (
                  <Link
                    key={book.id}
                    to={`/books/${book.id}`}
                    className="block"
                  >
                    <motion.article
                      className="group relative aspect-[3/4] overflow-hidden bg-card"
                      initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="font-ui text-xs text-gold tracking-wider mb-2">{book.year}</span>
                        <h3 className="font-display text-xl md:text-2xl mb-1">{book.title}</h3>
                        {enhanced && (
                          <p className="text-muted-foreground/80 text-xs italic mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {enhanced.subtitle}
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {book.description}
                        </p>
                        {book.award && (
                          <p className="mt-3 font-ui text-xs text-gold tracking-wide">
                            🏆 {book.award}
                          </p>
                        )}
                      </div>
                    </motion.article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        /* Reading Paths */
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Not sure where to <span className="text-gold">start</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've created four reading paths based on different interests and approaches.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {readingPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  className="p-8 border border-border/50 hover:border-gold/30 transition-colors"
                  initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <path.icon className="w-6 h-6 text-gold" />
                    <h3 className="font-display text-xl">Path {index + 1}: {path.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                  
                  <ol className="space-y-2 mb-4">
                    {path.books.map((book, i) => (
                      <li key={book} className="text-sm flex items-start gap-2">
                        <span className="text-gold font-ui">{i + 1}.</span>
                        <span className="text-foreground">{book}</span>
                      </li>
                    ))}
                  </ol>
                  
                  <p className="text-xs text-muted-foreground/80 italic">
                    Why this path: {path.why}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards Recognition */}
      <section className="page-section bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Recognition</span>
            <h2 className="font-display text-4xl md:text-5xl mb-16">
              Literary <span className="text-gold">Awards</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '1982', book: 'Chhallan', award: 'Best Punjabi Book — JKAACL' },
              { year: '1987', book: 'Bharam Bhullayan', award: 'Best Book — JKAACL' },
              { year: '1991', book: 'Kirchan', award: 'Best Book — JKAACL', note: '"Pure form ghazals"' },
              { year: '2014', book: 'Aroope Akhran da Aks', award: 'Professor Mohan Singh Award' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="p-6 border border-border/50 text-left"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <span className="font-ui text-xs text-gold tracking-widest">{item.year}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{item.book}</h3>
                <p className="text-muted-foreground text-sm">{item.award}</p>
                {item.note && (
                  <p className="text-xs text-gold/80 mt-2 italic">{item.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Libraries & Scholars */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, x: -30 } : undefined}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border/50"
            >
              <h3 className="font-display text-2xl mb-4">For Libraries & Academic Institutions</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Surinder Singh Seerat merits inclusion as a significant contemporary poet with 4 major awards spanning 32 years, 
                a 2015 National Seminar dedicated to his creative process, and institutional leadership founding two California literary organizations.
              </p>
              <Link to="/contact" className="text-gold font-ui text-sm tracking-wider flex items-center gap-2 hover:underline">
                Request library acquisition info <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={shouldAnimate ? { opacity: 0, x: 30 } : undefined}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border/50"
            >
              <h3 className="font-display text-2xl mb-4">For Scholars & Researchers</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Minimal secondary scholarship exists on Surinder's work—<strong className="text-foreground">opportunity to establish yourself 
                as a scholarly authority</strong> on a validated contemporary poet. Research angles include diaspora poetics, 
                physicist's epistemological approach, and technical ghazal analysis.
              </p>
              <Link to="/contact" className="text-gold font-ui text-sm tracking-wider flex items-center gap-2 hover:underline">
                Contact for research inquiries <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <EmailCapture variant="books" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Experience the <span className="text-gold">Poetry</span> Through Music
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              The Tishnagi album demonstrates what makes these ghazals compelling—longing expressed through technical mastery.
            </p>
            <Link to="/tishnagi" className="btn-gold">
              Listen to Tishnagi
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Books;
