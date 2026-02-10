import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { VerticalTimeline } from '@/components/sections/about/VerticalTimeline';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const poetPortrait = '/images/poet-portrait.jpg';

const faqItems = [
  {
    question: "Who is Surinder Seerat?",
    answer: "Surinder Singh Seerat is an award-winning Punjabi poet, novelist, critic, editor, and short story writer with particular expertise in the ghazal form. Born in Kashmir in 1947, he became the first person in his village to graduate university, built a career as a physics professor, and later founded two major Punjabi literary organizations in California. He has published thirteen books spanning 45 years (1980-2025), earning major literary awards and recognition."
  },
  {
    question: "How many books has Surinder Seerat published?",
    answer: "Surinder Seerat has published thirteen works spanning 45 years (1980-2025). His collection includes poetry volumes exploring free verse, open verse, and pure ghazal forms, novels, short story collections, an edited critical volume featuring 35 scholars, and most recently the anthology Amrīkī Punjabi Kahāṇī (2025) for the World Punjabi Sahit Academy Silver Jubilee."
  },
  {
    question: "What awards has Surinder Seerat received?",
    answer: "Surinder Seerat has received four major literary awards: JKAACL Best Punjabi Book Award (1982) for Chhallan, JKAACL Best Punjabi Book Award (1987) for Bharam Bhullayan, JKAACL Best Punjabi Book Award (1991) for Kirchan, and the Professor Mohan Singh Award (2014) for Aroope Akhran da Aks. In 2015, a National Seminar in Jammu was dedicated to studying his creative process."
  },
  {
    question: "What is a ghazal?",
    answer: "A ghazal is a poetic form consisting of rhyming couplets and a refrain, with each couplet containing a complete thought while contributing to a unified theme. Originating in 7th-century Arabia and perfected in Persian and Urdu traditions, the ghazal explores themes of love, loss, and mysticism. Visit our Ghazal History page to learn more about this ancient art form."
  },
  {
    question: "Where can I listen to Surinder Seerat's poetry?",
    answer: "You can experience Surinder Seerat's poetry through Tishnagi, his ghazal album that demonstrates the musical quality of his work. The album is available on YouTube and SoundCloud. Visit our Tishnagi page to listen and learn more about this collection of sung ghazals."
  }
];

const timelineItems = [
  { year: '1947', event: 'Born in Sadipura-Pulwama, Kashmir, India' },
  { year: '1966', event: 'B.Sc. from Amar Singh Degree College — First in family and village to graduate' },
  { year: '1969', event: 'M.Sc. Physics (Electronics) from University of Kashmir' },
  { year: '1980', event: 'First book "Chhallan" published' },
  { year: '1982', event: 'First JKAACL Best Punjabi Book Award' },
  { year: '1987', event: 'Selected for highest grade of college teachers in India' },
  { year: '1992', event: 'Founded Punjabi Sahit Sabha California' },
  { year: '2002', event: 'Co-founded Vishav Punjabi Sahit Academy' },
  { year: '2011', event: 'Sabbatical to focus on poetry full-time' },
  { year: '2014', event: 'Published "Aroope Akhran da Aks" — Professor Mohan Singh Award' },
  { year: '2015', event: 'National Seminar in Jammu dedicated to his creative process' },
  { year: '2016', event: '"Srijna te Samvaad" — 35 scholars examine his work' },
  { year: '2022', event: '"Poorab Pacham te Parvaas" — Short stories on the immigrant journey' },
  { year: '2023', event: '"Jung Jaari Hai" — The struggle continues in late poetry' },
  { year: '2025', event: '"Amrīkī Punjabi Kahāṇī" — 22-author anthology for WPSA Silver Jubilee' },
];

const About = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'From Physics to Poetry: A Journey Across Continents — Surinder Seerat';
  }, []);

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
            <span className="chapter-label block">The Story</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              From <span className="text-gold italic">Physics</span> to Poetry
            </h1>
            <p className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Poet, novelist, critic, editor, and short story writer. First in his village to graduate university. 
              Professor for 20 years. Founder of California's premier Punjabi literary organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={shouldAnimate ? { opacity: 0, x: -40 } : undefined}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-gold/30" />
              <img
                src={poetPortrait}
                alt="Surinder Seerat"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.article
            className="order-1 lg:order-2"
            initial={shouldAnimate ? { opacity: 0, x: 40 } : undefined}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Beginning</span>
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              Kashmir, <span className="text-gold">1947</span>
            </h2>
            <div className="text-muted-foreground space-y-3 text-base leading-relaxed">
              <p>
                Surinder Singh Seerat was born on September 19, 1947, in Sadipura-Pulwama, Kashmir, India—a small village 
                where higher education was not just rare, but virtually unknown.
              </p>
              <p>
                He would become the first person in his family to graduate from university. Not just his family—the first person in his entire village.
              </p>
              <p>
                This wasn't a small achievement. It was a rupture in generational expectations, made possible only through 
                tutoring other students to finance his education and earning full scholarships through academic excellence.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* The Scholar */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Scholar</span>
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              Building <span className="text-gold">Foundations</span> (1964-1969)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 border border-border/50">
                <h3 className="font-display text-lg mb-3 text-gold">Education</h3>
                <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li>1966: B.Sc. in Physics, Chemistry, Mathematics, and English — Amar Singh Degree College</li>
                  <li>1969: M.Sc. in Physics and Electronics — University of Kashmir</li>
                </ul>
              </div>
              
              <div className="p-5 border border-border/50">
                <h3 className="font-display text-lg mb-3 text-gold">Academic Career</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For over 20 years, Surinder taught physics—primarily at G.G.M. Science College in Jammu. 
                  In 1987, he was selected for the highest grade of college teachers in India under the Union Grant Commission.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground italic text-center text-sm">
              But even as he taught the measurable universe, he was writing about what measurement cannot touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Parallel Life */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Parallel Life</span>
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              The Literary <span className="text-gold">Voice</span> (1965-1989)
            </h2>
            
            <div className="text-muted-foreground space-y-3 text-base leading-relaxed mb-8">
              <p>
                While building his academic career, Surinder was active in Punjabi literary circles throughout India—not just as a poet, 
                but as a critic, editor, and short story writer. His versatility across forms earned him recognition as a complete literary voice.
              </p>
              <p>
                He published his first poetry collection, <em>Chhallan</em>, in 1980 and received his first major recognition: 
                the JKAACL Best Punjabi Book Award in 1982. His novel <em>Bharam Bhullayan</em> followed in 1986, demonstrating 
                his mastery of stream-of-consciousness prose alongside his ghazal expertise.
              </p>
              <p>
                By the time he left India, he was an established literary figure with three major awards.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { year: '1982', title: 'JKAACL Award', book: 'Chhallan' },
                { year: '1987', title: 'JKAACL Award', book: 'Bharam Bhullayan' },
                { year: '1991', title: 'JKAACL Award', book: 'Kirchan' },
              ].map((award, index) => (
                <motion.div
                  key={award.year}
                  className="p-3 md:p-4 border border-gold/30 text-center"
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gold font-ui text-xs tracking-wider">{award.year}</span>
                  <p className="font-display text-sm md:text-base mt-1">{award.title}</p>
                  <p className="text-muted-foreground text-xs italic mt-1">{award.book}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Immigrant */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Immigrant</span>
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              <span className="text-gold">California</span> (Late 1980s)
            </h2>
            
            <div className="text-muted-foreground space-y-3 text-base leading-relaxed">
              <p>
                Surinder immigrated to California, where he worked in corporate America—IBM, Iomega, and the United States Postal Service management.
              </p>
              <p>
                For many, this would have been the end of a literary career. The demands of building a new life, 
                supporting a family, navigating a foreign professional landscape—these things consume time and energy.
              </p>
              <p>
                But Surinder kept writing.
              </p>
              <p>
                And he did something more: he built the institutional foundations to preserve Punjabi literature in his new home.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Builder */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Builder</span>
            <h2 className="font-display text-2xl md:text-3xl mb-8">
              Literary <span className="text-gold">Leadership</span> (1992-2002)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border/50">
                <span className="text-gold font-ui text-xs tracking-widest">1992</span>
                <h3 className="font-display text-xl mt-2 mb-3">Punjabi Sahit Sabha California</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Surinder founded an organization dedicated to preserving and advancing Punjabi literature in North America.
                  He served as President from 1992 through 2002, transforming California into a Punjabi literary center.
                </p>
              </div>
              
              <div className="p-6 border border-border/50">
                <span className="text-gold font-ui text-xs tracking-widest">2002</span>
                <h3 className="font-display text-xl mt-2 mb-3">Vishav Punjabi Sahit Academy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  He co-founded this organization, continuing his work as a Board Member.
                  These organizations published books, produced stage plays, organized <em>kavi darbars</em>, seminars, and conferences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition Across Continents */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              Recognition Across <span className="text-gold">Continents</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Four major awards spanning 32 years—evidence of sustained literary excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { year: '1982', title: 'JKAACL Best Punjabi Book Award', book: 'Chhallan' },
              { year: '1987', title: 'JKAACL Best Book Award', book: 'Bharam Bhullayan' },
              { year: '1991', title: 'JKAACL Best Book Award', book: 'Kirchan (pure form ghazals)' },
              { year: '2014', title: 'Professor Mohan Singh Award', book: '' },
            ].map((award, index) => (
              <motion.div
                key={award.year}
                className="p-6 bg-card/50 rounded-lg"
                initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-gold font-ui text-sm tracking-wider">{award.year}</span>
                <h3 className="font-display text-lg md:text-xl mt-1 mb-2">{award.title}</h3>
                {award.book && <p className="text-muted-foreground text-sm">for {award.book}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Scientist-Poet Lens */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Unique Lens</span>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              Scientist Meets <span className="text-gold">Mystic</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl">
              What makes Surinder's poetry distinctive is precisely what made his life unusual: the collision of rational precision and mystical inquiry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 border border-border/50">
                <h3 className="font-display text-lg mb-3 text-gold">The Physicist's Approach</h3>
                <ul className="text-muted-foreground text-sm space-y-2 leading-relaxed">
                  <li>• Trained in measurement, observation, falsifiability</li>
                  <li>• Understanding of systems, structures, limits</li>
                  <li>• Appreciation for what can be known with certainty</li>
                </ul>
              </div>
              
              <div className="p-5 border border-border/50">
                <h3 className="font-display text-lg mb-3 text-gold">The Poet's Questions</h3>
                <ul className="text-muted-foreground text-sm space-y-2 leading-relaxed">
                  <li>• What lies beyond measurement?</li>
                  <li>• How does consciousness work when no instruments can detect it?</li>
                  <li>• Can language capture internal experience—or does it always fail?</li>
                </ul>
              </div>
            </div>
            
            <p className="text-muted-foreground text-center text-sm leading-relaxed">
              This is not a common combination. Most poets never study physics. Most physicists never write ghazals.
              <br /><br />
              Surinder did both—and his poetry reflects this epistemological tension: 
              the desire to know confronting the unknowable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Questions</span>
            <h2 className="font-display text-2xl md:text-3xl">
              Frequently <span className="text-gold">Asked</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Timeline</span>
            <h2 className="font-display text-2xl md:text-3xl">
              Key <span className="text-gold">Milestones</span>
            </h2>
          </motion.div>

          <VerticalTimeline items={timelineItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              Explore <span className="text-gold">Further</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/books" className="btn-gold">
                Browse the Books
                <ArrowRight size={16} />
              </Link>
              <Link to="/tishnagi" className="btn-minimal">
                Listen to Tishnagi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
