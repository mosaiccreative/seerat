import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { BookshelfStage, BookListCard, ShelfDividerMotif } from '@/components/bookshelf';

import { books } from '@/data/books';
import { useEffect } from 'react';
import { ArrowRight, Award, BookOpen, Music, Users } from 'lucide-react';

// Enhanced book data with theme, subtitle, who it's for, form, and expanded descriptions
const enhancedBookData: Record<string, {
  subtitle: string;
  theme: string;
  form: string;
  whoFor: string[];
  expandedDescription?: string;
  startHere?: boolean;
}> = {
  'chhallan': {
    subtitle: 'The Dance of Internal Struggle',
    theme: 'The internal struggle to exist',
    form: 'Free verse',
    expandedDescription: "Surinder's debut—raw, unflinching exploration of what it means to wrestle with existence itself. The free verse form mirrors the chaos of internal conflict, refusing easy resolution.",
    whoFor: [
      'Readers drawn to existential themes',
      'Those appreciating raw, unpolished emotional honesty',
      'Anyone exploring the darker corners of consciousness',
    ],
  },
  'khalaw-ch-tangey-harf': {
    subtitle: 'Alone with Hanging Words',
    theme: 'The transformation from introvert to extravert',
    form: 'Open verse',
    expandedDescription: 'What happens when someone deeply internal must engage the external world? This collection explores that painful, necessary transformation. The "hanging words" suggest language suspended between inner and outer realities.',
    whoFor: [
      'Introverts navigating social expectations',
      'Those experiencing personal transformation',
      'Readers interested in psychological poetry',
    ],
  },
  'bharam-bhullayan': {
    subtitle: 'Illusions and Labyrinths',
    theme: 'The maze of perception and reality',
    form: 'Novel (stream of consciousness)',
    expandedDescription: "Surinder's only published novel employs stream-of-consciousness to blur boundaries between thought and experience, perception and truth. A physicist exploring the subjectivity of experience.",
    whoFor: [
      'Readers of experimental fiction',
      'Those who enjoyed Woolf, Joyce, Faulkner',
      'Anyone questioning the nature of reality and perception',
    ],
  },
  'kirchan': {
    subtitle: 'Splinters: Pure Ghazal Form',
    theme: 'Hidden realities beneath surface life',
    form: 'Pure ghazal',
    expandedDescription: 'This is where Surinder fully embraces traditional ghazal form—and the Jammu & Kashmir Academy recognized the mastery. Each ghazal maintains technical precision while revealing truths we hide even from ourselves.',
    startHere: true,
    whoFor: [
      'Ghazal purists appreciating technical excellence',
      'Readers seeking depth beneath everyday existence',
      'Literary scholars analyzing contemporary ghazal form',
    ],
  },
  'kikkar-kande': {
    subtitle: 'Acacia Thorns',
    theme: 'Symbolic subjectivity meets technical poetry',
    form: 'Open verse + Ghazals',
    expandedDescription: 'The acacia tree—thorny, resilient, deeply rooted—becomes a symbol for consciousness itself. Published the same year Surinder founded Punjabi Sahit Sabha California—a book about roots created as he planted institutional foundations abroad.',
    whoFor: [
      'Readers who enjoy symbolic poetry',
      'Those interested in the immigrant experience (roots and thorns)',
      'Poetry lovers appreciating formal variety',
    ],
  },
  'surat-seerat-te-saraab': {
    subtitle: 'Form, Character, and Mirage',
    theme: "Unachievable life desires in humanity's wilderness",
    form: 'Ghazals',
    expandedDescription: "After a 15-year publishing gap, Surinder returns with ghazals exploring saraab—the mirage. What we chase but cannot grasp. The title plays on the poet's own name (seerat means character).",
    whoFor: [
      "Anyone who's chased something forever out of reach",
      'Readers drawn to themes of longing and incompleteness',
      'Those appreciating the beauty of unfulfilled desire',
    ],
  },
  'saij-sullee-te-saleeb': {
    subtitle: 'Marriage Bed, Scaffold, and Cross',
    theme: 'Three life stages—self, cause, humanity',
    form: 'Open verse & ghazals',
    expandedDescription: "The title justifies the three stages of life: Living for yourself, Living for a cause, and Living for humanity. Poetry that traces the evolution from personal desire to collective purpose.",
    whoFor: [
      "Readers exploring life's purpose and meaning",
      'Those interested in spiritual evolution',
      'Anyone asking "What am I living for?"',
    ],
  },
  'aroope-akhran-da-aks': {
    subtitle: 'The Reflection of Incomparable Letters',
    theme: 'The mysteriousness of the modern world',
    form: 'Open verse & ghazals',
    expandedDescription: "Surinder's most recent book reflects the mysteriousness of the modern world. He exemplifies the idea that a word's definition is trapped within the word itself—demonstrating that it is impossible to interpret the internal thoughts of any creation with words or symbols.",
    startHere: true,
    whoFor: [
      "Readers navigating modern life's complexity",
      'Those appreciating philosophical inquiry',
      'Anyone feeling the mystery beneath technological surfaces',
    ],
  },
};

const readingPaths = [
  {
    title: 'Award-Winning Introduction',
    icon: Award,
    description: 'Let award-winning work prove the quality. Three different forms showcase his range.',
    books: [
      { title: 'Kirchan', year: '1990', id: 'kirchan' },
      { title: 'Aroope Akhran da Aks', year: '2014', id: 'aroope-akhran-da-aks' },
      { title: 'Chhallan', year: '1980', id: 'chhallan' },
    ],
  },
  {
    title: 'Thematic Journey Through Longing',
    icon: Music,
    description: 'For those drawn to themes of longing, meaning, and the human journey toward what remains forever incomplete.',
    books: [
      { title: 'Listen: Tishnagi album', year: '', id: null, link: '/tishnagi' },
      { title: 'Surat Seerat Te Saraab', year: '2007', id: 'surat-seerat-te-saraab' },
      { title: 'Saij Sullee Te Saleeb', year: '2007', id: 'saij-sullee-te-saleeb' },
    ],
  },
  {
    title: 'The Immigrant Voice',
    icon: Users,
    description: 'Poetry exploring displacement, roots, and building new ground.',
    books: [
      { title: 'Kikkar Kande', year: '1992', id: 'kikkar-kande' },
      { title: 'Saij Sullee Te Saleeb', year: '2007', id: 'saij-sullee-te-saleeb' },
      { title: 'Aroope Akhran da Aks', year: '2014', id: 'aroope-akhran-da-aks' },
    ],
  },
  {
    title: 'Technical Mastery',
    icon: BookOpen,
    description: 'Watch a poet master multiple forms across 34 years. Perfect for students of poetry craft.',
    books: [
      { title: 'Chhallan', year: '1980', id: 'chhallan', note: 'Free verse' },
      { title: 'Kirchan', year: '1990', id: 'kirchan', note: 'Pure ghazal' },
      { title: 'Aroope Akhran da Aks', year: '2014', id: 'aroope-akhran-da-aks', note: 'Mixed' },
    ],
  },
];

const Books = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'Eight Books, 34 Years, Four Major Awards — Surinder Seerat';
  }, []);

  // Sort books oldest to newest for the shelf
  const sortedBooks = [...books].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
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
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              Select a spine to explore the collection
            </p>
            <p className="text-muted-foreground/60 text-sm font-ui">
              From <em>Chhallan</em> (1980) to <em>Aroope Akhran da Aks</em> (2014)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bookshelf Stage - Single Row */}
      <section className="py-8 md:py-16 px-4 md:px-8">
        <BookshelfStage 
          books={sortedBooks} 
          motionEnabled={shouldAnimate}
          centered
        />
      </section>

      {/* Decorative Divider */}
      <ShelfDividerMotif className="my-8 md:my-12" />

      {/* Vertical Book Cards */}
      <section className="py-8 md:py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="chapter-label block">The Catalog</span>
            <h2 className="font-display text-3xl md:text-4xl">
              Explore the <span className="text-gold">Collection</span>
            </h2>
          </motion.div>

          {sortedBooks.map((book, index) => {
            const enhanced = enhancedBookData[book.id];
            return (
              <BookListCard
                key={book.id}
                id={book.id}
                title={book.title}
                year={book.year}
                form={enhanced?.form}
                subtitle={enhanced?.subtitle}
                theme={enhanced?.theme}
                description={enhanced?.expandedDescription || book.description}
                whoFor={enhanced?.whoFor}
                award={book.award}
                foreword={book.foreword}
                coverImage={book.coverImage}
                startHere={enhanced?.startHere}
                motionEnabled={shouldAnimate}
                index={index}
              />
            );
          })}
        </div>
      </section>

      {/* Literary Awards - Tightened with Animation */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Recognition</span>
            <h2 className="font-display text-3xl md:text-4xl mb-10">
              Literary <span className="text-gold">Awards</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: '1982', book: 'Chhallan', award: 'Best Punjabi Book — JKAACL' },
              { year: '1987', book: 'Bharam Bhullayan', award: 'Best Book — JKAACL' },
              { year: '1991', book: 'Kirchan', award: 'Best Book — JKAACL', note: '"Pure form ghazals"' },
              { year: '2014', book: 'Aroope Akhran da Aks', award: 'Professor Mohan Singh Award' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="p-5 border border-border/50 text-left hover:border-gold/50 hover:shadow-[0_0_15px_-5px_hsl(var(--gold)/0.3)] transition-all duration-300"
                initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="font-ui text-xs text-gold tracking-widest">{item.year}</span>
                <h3 className="font-display text-lg mt-2 mb-1">{item.book}</h3>
                <p className="text-muted-foreground text-sm">{item.award}</p>
                {item.note && (
                  <p className="text-xs text-gold/80 mt-2 italic">{item.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Reading Paths */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="chapter-label block">Curated Journeys</span>
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Recommended <span className="text-gold">Reading Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four approaches to discovering the collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {readingPaths.map((path, index) => (
              <motion.div
                key={path.title}
                className="p-6 md:p-8 border border-border/50 hover:border-gold/30 transition-colors"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <path.icon className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-xl">Path {index + 1}: {path.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-5">{path.description}</p>
                
                <ol className="space-y-2">
                  {path.books.map((book, i) => (
                    <li key={book.title} className="text-sm flex items-start gap-2">
                      <span className="text-gold font-ui shrink-0">{i + 1}.</span>
                      {book.id ? (
                        <Link 
                          to={`/books/${book.id}`} 
                          className="text-foreground hover:text-gold transition-colors"
                        >
                          {book.title} {book.year && `(${book.year})`}
                          {(book as any).note && <span className="text-muted-foreground"> — {(book as any).note}</span>}
                        </Link>
                      ) : book.link ? (
                        <Link 
                          to={book.link} 
                          className="text-foreground hover:text-gold transition-colors"
                        >
                          {book.title}
                        </Link>
                      ) : (
                        <span className="text-foreground">{book.title}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Experience the <span className="text-gold italic underline underline-offset-4 decoration-gold/50">Poetry</span> Through Music
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
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
