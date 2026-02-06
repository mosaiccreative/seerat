import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ArrowRight, Music, BookOpen, Users, Award } from 'lucide-react';
import { useEffect } from 'react';
import { AnswerBlock } from '@/components/sections/AnswerBlock';

const GhazalHistory = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'The Ghazal: From Bollywood\'s Foundation to Modern Renaissance — Surinder Seerat';
  }, []);

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
            <span className="chapter-label block">Understanding the Tradition</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8">
              The <span className="text-gold italic">Ghazal</span>
            </h1>
            <p className="font-display text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From Bollywood's Foundation to Modern Renaissance
            </p>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Understand the poetic form that shaped Indian cinema and continues to explore human longing
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is a Ghazal */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Form</span>
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              What is a <span className="text-gold">Ghazal</span>?
            </h2>
            
            <div className="prose-poetry text-muted-foreground space-y-6 mb-12">
              <p className="text-lg">
                The ghazal is a poetic form that has captivated audiences for over a millennium. 
                Originating in 7th-century Arabia and flourishing through Persian and Urdu literary traditions, 
                the ghazal found a unique home in Punjabi poetry—and later, in the heart of Indian cinema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">The Technical Form</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A ghazal is composed of <strong className="text-foreground">rhyming couplets</strong> (called <em>sher</em>) 
                  and a <strong className="text-foreground">refrain</strong> (called <em>radif</em>).
                </p>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li><span className="text-gold">•</span> Each sher is a self-contained poem</li>
                  <li><span className="text-gold">•</span> Rhyme scheme: AA, BA, CA, DA</li>
                  <li><span className="text-gold">•</span> Maqta: Final couplet with poet's pen name</li>
                </ul>
              </div>

              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">Universal Themes</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li><span className="text-gold">•</span> Longing and separation (<em>ishq</em>)</li>
                  <li><span className="text-gold">•</span> Mysticism and spirituality (Sufi tradition)</li>
                  <li><span className="text-gold">•</span> Beauty and desire</li>
                  <li><span className="text-gold">•</span> Consciousness and existence</li>
                  <li><span className="text-gold">•</span> Loss and remembrance</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bollywood's Foundation */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">Cinema & Poetry</span>
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              The Ghazal as <span className="text-gold">Bollywood's Foundation</span>
            </h2>
            
            <div className="prose-poetry text-muted-foreground space-y-6 mb-12">
              <p className="text-lg">
                When Indian cinema found its voice with the first talkie film, <em>Alam Ara</em> (1931), 
                <strong className="text-foreground"> ghazals provided the foundation</strong>. The poetic form dominated 
                Bollywood music for three decades, establishing a tradition of literary excellence in film lyrics.
              </p>
              <p>
                During the Golden Era (1930s-1960s), cinema and poetry were inseparable. The ghazal's structure—independent 
                couplets exploring longing, beauty, and loss—proved perfect for expressing complex emotions in film narratives.
              </p>
            </div>

            <div className="p-8 border border-gold/30 bg-card/50 mb-12">
              <h3 className="font-display text-xl mb-4">The Tazmeen Tradition</h3>
              <p className="text-muted-foreground">
                When Bollywood used classical poetry, it followed the <em>tazmeen</em> tradition—<strong className="text-foreground">adding new verses 
                to established works as tribute</strong>, not plagiarism. This practice honored the original poet while extending their artistic vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Poet-Lyricist Legacy */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <span className="chapter-label block">The Masters</span>
            <h2 className="font-display text-3xl md:text-5xl">
              The <span className="text-gold">Poet-Lyricist</span> Legacy
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Bollywood's greatest lyricists weren't simply songwriters—they were poets first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Gulzar', 
                born: 'b. 1934',
                highlight: 'A poet at heart, then writer, lyricist, and director',
                works: '"Chaiyya Chaiyya", "Ay Hairathe Aashiqui"'
              },
              { 
                name: 'Javed Akhtar', 
                born: 'b. 1945',
                highlight: 'Known for eloquence and sophistication',
                works: '"Ek Ladki Ko Dekha", "Senorita"'
              },
              { 
                name: 'Irshad Kamil', 
                born: 'b. 1971',
                highlight: 'Started as popular poet before film work',
                works: '"Agar Tum Saath Ho", "Nadaan Parinde"'
              },
            ].map((poet, index) => (
              <motion.div
                key={poet.name}
                className="p-6 border border-border/50"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className="font-display text-2xl mb-1">{poet.name}</h3>
                <span className="text-gold font-ui text-xs tracking-wider">{poet.born}</span>
                <p className="text-muted-foreground text-sm mt-4 mb-3">{poet.highlight}</p>
                <p className="text-xs text-muted-foreground/70 italic">{poet.works}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 New Era */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">A New Era</span>
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              2025: <span className="text-gold">Lyricists Rise</span>
            </h2>
            
            <div className="prose-poetry text-muted-foreground space-y-6 mb-12">
              <p className="text-lg">
                In 2025, India's music and screenwriter groups signed a <strong className="text-foreground">historic agreement 
                recognizing lyricists as "equal co-authors" and "primary artists"</strong>—not merely contributors.
              </p>
              <p>
                This marks a cultural shift: quality poetry is increasingly valued in an industry that once prioritized 
                commercial formulas over literary depth. According to SWA India, there is a <strong className="text-foreground">"dearth of quality 
                lyricists in Bollywood"</strong>—creating opportunity for poets with literary excellence and emotional authenticity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Surinder's Place */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Living Tradition</span>
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              Surinder Seerat's <span className="text-gold">Place</span> in This Tradition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Award, title: 'Technical Mastery', desc: 'Kirchan (1990) won JKAACL Award for "pure form ghazals"' },
                { icon: BookOpen, title: 'Philosophical Depth', desc: 'Physicist background brings unique epistemological perspective' },
                { icon: Music, title: 'Musical Demonstration', desc: 'Tishnagi ghazal album shows cinematic potential' },
                { icon: Users, title: 'Institutional Impact', desc: 'Founded two literary organizations preserving tradition abroad' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 border border-border/50 flex gap-4"
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-lg italic text-center">
              His work honors classical form while engaging contemporary questions—exactly what the tradition demands for continued relevance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Answer Blocks for SEO */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <AnswerBlock
            id="what-is-ghazal"
            question="What is a ghazal?"
            answer="A ghazal is a poetic form originating in 7th-century Arabia, composed of rhyming couplets (sher) and a refrain (radif). Each couplet stands alone as a complete thought while exploring themes of longing, mysticism, beauty, and consciousness. The form shaped Indian cinema through Bollywood's golden era and continues to captivate audiences today."
            sourceLabel="Ghazal History"
            sourceUrl="https://www.surinderseerat.com/ghazal-history/"
          />
          
          <AnswerBlock
            id="ghazal-bollywood-connection"
            question="How did ghazals influence Bollywood?"
            answer="Ghazals provided the foundation for Bollywood music from the first talkie film Alam Ara (1931) through the 1960s. Legendary poet-lyricists like Gulzar, Javed Akhtar, and Irshad Kamil brought literary excellence to film, establishing a tradition where poetry and cinema were inseparable. In 2025, lyricists were officially recognized as 'equal co-authors' in Indian film music."
            sourceLabel="Bollywood Legacy"
            sourceUrl="https://www.surinderseerat.com/ghazal-history/"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Explore <span className="text-gold">Further</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tishnagi" className="btn-gold">
                Listen to Tishnagi
                <ArrowRight size={16} />
              </Link>
              <Link to="/books" className="btn-minimal">
                Browse the Books
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GhazalHistory;
