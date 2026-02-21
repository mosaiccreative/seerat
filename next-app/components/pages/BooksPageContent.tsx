'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { BookshelfStage, BookListCard, ShelfDividerMotif } from '@/components/bookshelf';
import { books } from '@/data/books';
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
  'amriki-punjabi-kahani': {
    subtitle: '22 Stories, Many Voices',
    theme: 'Diaspora as chorus—the American Punjabi story told collectively',
    form: 'Short story anthology',
    expandedDescription: "This is not a single narrative. This is 22 voices—writers across North America exploring what it means to be Punjabi in America. Surinder serves as curator and guide, weaving diverse stories into a coherent portrait of diaspora consciousness. The World Punjabi Sahit Academy entrusted him with this Silver Jubilee project.",
    startHere: true,
    whoFor: [
      'North American Punjabis seeking literary reflection',
      'Children of immigrants wanting to understand parent narratives',
      'Scholars building frameworks for diaspora literature',
      'Libraries building collections on South Asian-American literature',
    ],
  },
  'jung-jaari-hai': {
    subtitle: 'The Struggle Continues',
    theme: 'Resistance, persistence, and the refusal to settle',
    form: 'Contemporary poetry',
    expandedDescription: "Jung Jaari Hai—the struggle continues—is a declaration, not a lament. This is poetry for our moment: political without slogans, personal without sentimentality, philosophical without abstraction. These poems arrive as the poet enters his ninth decade—and instead of softening, they intensify.",
    whoFor: [
      'Readers seeking poetry with political and spiritual urgency',
      'Those asking "What does it mean to resist?"',
      'Anyone refusing despair in difficult times',
      'Philosophers, activists, truth-seekers',
    ],
  },
  'poorab-pacham-te-parvaas': {
    subtitle: 'East, West, and the Journey Between',
    theme: 'The immigrant condition—caught between geographies',
    form: 'Short stories',
    expandedDescription: "After years of poetry's vertical depth, Surinder turns to short stories—a form perfect for horizontal fragmentation. East and West are not destinations here. They're internal territories. The real journey (parvaas) is psychological, spiritual, existential.",
    whoFor: [
      'Anyone navigating life between cultures and geographies',
      'Readers drawn to diaspora narratives with psychological depth',
      'Immigrants, children of immigrants, third-culture individuals',
    ],
  },
  'bharam-bhuleyan-2nd-edition': {
    subtitle: 'Illusions and Labyrinths (Reissued)',
    theme: 'The enduring mystery of consciousness',
    form: 'Novel (stream of consciousness)',
    expandedDescription: "Thirty-one years after its original publication, Bharam Bhuleyan returns—the revolutionary 1986 novel that earned major awards for daring to employ stream-of-consciousness technique in Punjabi literature. The novel didn't age. It deepened.",
    whoFor: [
      'Readers of experimental fiction (Joyce, Woolf, Faulkner)',
      'Those interested in how consciousness itself can be formal structure',
      'New readers discovering a seminal work in diaspora literature',
    ],
  },
  'srijna-te-samvaad': {
    subtitle: 'Creation and Conversation',
    theme: "A poet's work through the lens of scholarly engagement",
    form: 'Edited critical volume',
    expandedDescription: "Thirty-five Punjabi scholars, writers, and literary critics converge on a single body of work. This is not biography or hagiography. This is rigorous, critical scholarship—academia in conversation with artistry. Each contributor asks: what does Surinder's voice reveal about contemporary Punjabi consciousness?",
    whoFor: [
      'Scholars and students of contemporary Punjabi literature',
      'Readers interested in how poetry is critically examined',
      'Anyone seeking multiple perspectives on a sustained literary career',
    ],
  },
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
    expandedDescription: "Surinder's only published novel employs stream-of-consciousness to blur boundaries between thought and experience, perception and truth. A physicist exploring the subjectivity of reflection.",
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
    expandedDescription: "This book reflects the mysteriousness of the modern world. He exemplifies the idea that a word's definition is trapped within the word itself—demonstrating that it is impossible to interpret the internal thoughts of any creation with words or symbols.",
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
    description: 'Let award-winning work prove the quality. Multiple forms showcase his range.',
    books: [
      { title: 'Chhallan', year: '1980', id: 'chhallan' },
      { title: 'Bharam Bhullayan', year: '1986', id: 'bharam-bhullayan' },
      { title: 'Kirchan', year: '1990', id: 'kirchan' },
    ],
  },
  {
    title: 'Thematic Journey Through Longing',
    icon: Music,
    description: 'For those drawn to themes of longing, meaning, and the human journey toward what remains forever incomplete.',
    books: [
      { title: "Khalaw 'ch Tangey Harf", year: '1985', id: 'khalaw-ch-tangey-harf' },
      { title: 'Surat Seerat Te Saraab', year: '2002', id: 'surat-seerat-te-saraab' },
      { title: 'Jung Jaari Hai', year: '2024', id: 'jung-jaari-hai' },
    ],
  },
  {
    title: 'The Immigrant Voice',
    icon: Users,
    description: 'Poetry and stories exploring displacement, roots, and building new ground.',
    books: [
      { title: 'Aroope Akhran da Aks', year: '2014', id: 'aroope-akhran-da-aks' },
      { title: 'Poorab Pacham te Parvaas', year: '2022', id: 'poorab-pacham-te-parvaas' },
      { title: 'Amrīkī Punjabi Kahāṇī', year: '2025', id: 'amriki-punjabi-kahani' },
    ],
  },
  {
    title: 'Technical Mastery',
    icon: BookOpen,
    description: 'Watch a poet master multiple forms across 45 years. Perfect for students of poetry craft.',
    books: [
      { title: 'Kikkar Kande', year: '1992', id: 'kikkar-kande' },
      { title: 'Listen: Tishnagi album', year: '2016', id: null, link: '/tishnagi' },
      { title: 'Bharam Bhuleyan (2nd Edition)', year: '2017', id: 'bharam-bhuleyan-2nd-edition' },
    ],
  },
];

export function BooksPageContent() {
  const { shouldAnimate } = useMotionPreference();

  // Sort books oldest to newest for the shelf
  const sortedBooks = [...books].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <m.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Collection</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
              Thirteen Books, <span className="text-gold italic">45 Years</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              Poetry, novels, stories, and scholarship spanning five decades
            </p>
            <p className="text-muted-foreground/60 text-sm font-ui">
              From <em>Chhallan</em> (1980) to <em>Amrīkī Punjabi Kahāṇī</em> (2025)
            </p>
          </m.div>
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
          <m.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="chapter-label block">The Catalog</span>
            <h2 className="font-display text-3xl md:text-4xl">
              Explore the <span className="text-gold">Collection</span>
            </h2>
          </m.div>

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
                coverPosition={book.coverPosition}
                coverFit={book.coverFit}
                startHere={enhanced?.startHere}
                motionEnabled={shouldAnimate}
                index={index}
              />
            );
          })}
        </div>
      </section>

      {/* Literary Awards */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <m.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Recognition</span>
            <h2 className="font-display text-3xl md:text-4xl mb-10">
              Literary <span className="text-gold">Awards</span>
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: '1982', book: 'Chhallan', award: 'Best Punjabi Book — JKAACL' },
              { year: '1987', book: 'Bharam Bhullayan', award: 'Best Book — JKAACL' },
              { year: '1991', book: 'Kirchan', award: 'Best Book — JKAACL', note: '"Pure form ghazals"' },
              { year: '2014', book: 'Aroope Akhran da Aks', award: 'Professor Mohan Singh Award' },
            ].map((item, index) => (
              <m.div
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
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Reading Paths */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-5xl mx-auto">
          <m.div
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
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {readingPaths.map((path, index) => (
              <m.div
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
                          href={`/books/${book.id}`}
                          className="text-foreground hover:text-gold transition-colors"
                        >
                          {book.title} {book.year && `(${book.year})`}
                        </Link>
                      ) : book.link ? (
                        <Link
                          href={book.link}
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
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <m.div
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

            <Link href="/tishnagi" className="btn-gold">
              Listen to Tishnagi
              <ArrowRight size={16} />
            </Link>
          </m.div>
        </div>
      </section>
    </PageLayout>
  );
}
