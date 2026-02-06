import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import poetPortrait from '@/assets/poet-portrait.jpg';

const About = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'From Physics to Poetry: A Journey Across Continents — Surinder Seerat';
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
            <span className="chapter-label block">The Story</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
              From <span className="text-gold italic">Physics</span> to Poetry
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              First in his village to graduate university. Professor for 20 years. 
              Founder of California's premier Punjabi literary organization. Poet for life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={shouldAnimate ? { opacity: 0, x: -40 } : undefined}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-[4/5] max-w-md">
              <div className="absolute -inset-4 border border-gold/30" />
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
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Kashmir, <span className="text-gold">1947</span>
            </h2>
            <div className="prose-poetry text-muted-foreground space-y-4">
              <p>
                Surinder Singh Seerat was born on <strong className="text-foreground">September 19, 1947</strong>, 
                in <strong className="text-foreground">Sadipura-Pulwama, Kashmir, India</strong>—a small village 
                where higher education was not just rare, but virtually unknown.
              </p>
              <p>
                He would become the <strong className="text-foreground">first person in his family to graduate from university</strong>.
                Not just his family—<strong className="text-foreground">the first person in his entire village</strong>.
              </p>
              <p>
                This wasn't a small achievement. It was a rupture in generational expectations, made possible only through 
                <strong className="text-foreground"> tutoring other students to finance his education</strong> and earning 
                full scholarships through academic excellence.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* The Scholar */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Scholar</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Building <span className="text-gold">Foundations</span> (1966-1987)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">Education</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li><strong className="text-foreground">1966:</strong> B.Sc. in Physics, Chemistry, Mathematics, and English — Amar Singh Degree College</li>
                  <li><strong className="text-foreground">1969:</strong> M.Sc. in Physics and Electronics — University of Kashmir</li>
                </ul>
              </div>
              
              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">Academic Career</h3>
                <p className="text-muted-foreground text-sm">
                  For over 20 years, Surinder taught physics—primarily at <strong className="text-foreground">G.G.M. Science College in Jammu</strong>. 
                  In 1987, he was selected for the <strong className="text-foreground">highest grade of college teachers in India</strong> 
                  under the Union Grant Commission.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground italic text-center">
              But even as he taught the measurable universe, he was writing about what measurement cannot touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Parallel Life */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Parallel Life</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Poetry <span className="text-gold">(1968-1987)</span>
            </h2>
            
            <div className="prose-poetry text-muted-foreground space-y-4 mb-12">
              <p>
                While building his academic career, Surinder was active in Punjabi literary circles throughout India.
                He published his first poetry collection, <em>Chhallan</em>, in <strong className="text-foreground">1980</strong> 
                and received his first major recognition: <strong className="text-foreground">JKAACL Best Punjabi Book Award in 1982</strong>.
              </p>
              <p>
                By the time he left India, he was an established poet with <strong className="text-foreground">three major literary awards</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { year: '1982', title: 'JKAACL Award', book: 'Chhallan' },
                { year: '1987', title: 'JKAACL Award', book: 'Bharam Bhullayan' },
                { year: '1991', title: 'JKAACL Award', book: 'Kirchan' },
              ].map((award, index) => (
                <motion.div
                  key={award.year}
                  className="p-4 border border-gold/30 text-center"
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gold font-ui text-xs tracking-wider">{award.year}</span>
                  <p className="font-display text-lg mt-2">{award.title}</p>
                  <p className="text-muted-foreground text-xs italic mt-1">{award.book}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Immigrant */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Immigrant</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              <span className="text-gold">California</span> (Late 1980s)
            </h2>
            
            <div className="prose-poetry text-muted-foreground space-y-4">
              <p>
                Surinder immigrated to California, where he worked in corporate America—<strong className="text-foreground">IBM, 
                Iomega, and the United States Postal Service management</strong>.
              </p>
              <p>
                For many, this would have been the end of a literary career. The demands of building a new life, 
                supporting a family, navigating a foreign professional landscape—these things consume time and energy.
              </p>
              <p className="text-foreground font-medium">
                But Surinder kept writing.
              </p>
              <p>
                And he did something more: <strong className="text-foreground">he built the institutional foundations 
                to preserve Punjabi literature in his new home</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Builder */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Builder</span>
            <h2 className="font-display text-3xl md:text-4xl mb-12">
              Literary <span className="text-gold">Leadership</span> (1992-2002)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border/50">
                <span className="text-gold font-ui text-xs tracking-widest">1992</span>
                <h3 className="font-display text-2xl mt-3 mb-4">Punjabi Sahit Sabha California</h3>
                <p className="text-muted-foreground text-sm">
                  Surinder founded an organization dedicated to preserving and advancing Punjabi literature in North America.
                  He served as <strong className="text-foreground">President from 1992 through 2002</strong>, transforming 
                  California into a <strong className="text-foreground">Punjabi literary center</strong>.
                </p>
              </div>
              
              <div className="p-8 border border-border/50">
                <span className="text-gold font-ui text-xs tracking-widest">2002</span>
                <h3 className="font-display text-2xl mt-3 mb-4">Vishav Punjabi Sahit Academy</h3>
                <p className="text-muted-foreground text-sm">
                  He co-founded this organization, continuing his work as a <strong className="text-foreground">Board Member</strong>.
                  These organizations published books, produced stage plays, organized <em>kavi darbars</em>, seminars, and conferences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Scientist-Poet Lens */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Unique Lens</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Scientist Meets <span className="text-gold">Mystic</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">The Physicist's Approach</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Trained in measurement, observation, falsifiability</li>
                  <li>• Understanding of systems, structures, limits</li>
                  <li>• Appreciation for what can be known with certainty</li>
                </ul>
              </div>
              
              <div className="p-6 border border-border/50">
                <h3 className="font-display text-xl mb-4 text-gold">The Poet's Questions</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• What lies beyond measurement?</li>
                  <li>• How does consciousness work when no instruments can detect it?</li>
                  <li>• Can language capture internal experience—or does it always fail?</li>
                </ul>
              </div>
            </div>
            
            <p className="text-muted-foreground text-center">
              This is not a common combination. Most poets never study physics. Most physicists never write ghazals.
              <br /><br />
              <strong className="text-foreground">Surinder did both</strong>—and his poetry reflects this epistemological tension: 
              the desire to know confronting the unknowable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Answer Block for SEO */}
      <section className="py-20 px-6 md:px-12 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnswerBlock
            id="who-is-surinder-seerat"
            question="Who is Surinder Singh Seerat?"
            answer="Surinder Singh Seerat (born September 19, 1947) is an award-winning Punjabi ghazal master, physicist, and literary leader. Born in Kashmir, he became the first person in his village to graduate university. After 20+ years as a physics professor, he immigrated to California where he founded Punjabi Sahit Sabha California (1992) and co-founded Vishav Punjabi Sahit Academy (2002). He has published eight books spanning 34 years, winning four major literary awards."
            sourceLabel="Official Biography"
            sourceUrl="https://www.surinderseerat.com/about/"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Timeline</span>
            <h2 className="font-display text-3xl md:text-4xl">
              Key <span className="text-gold">Milestones</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { year: '1947', event: 'Born in Sadipura-Pulwama, Kashmir, India' },
              { year: '1966', event: 'B.Sc. from Amar Singh Degree College — First in family and village to graduate' },
              { year: '1969', event: 'M.Sc. Physics (Electronics) from University of Kashmir' },
              { year: '1980', event: 'First book "Chhallan" published' },
              { year: '1982', event: 'First JKAACL Best Punjabi Book Award' },
              { year: '1987', event: 'Selected for highest grade of college teachers in India' },
              { year: '1992', event: 'Founded Punjabi Sahit Sabha California' },
              { year: '2002', event: 'Co-founded Vishav Punjabi Sahit Academy, California' },
              { year: '2011', event: 'Sabbatical to focus on poetry and ghazals full-time' },
              { year: '2014', event: 'Published "Aroope Akhran da Aks" — Professor Mohan Singh Award' },
              { year: '2015', event: 'National Seminar in Jammu dedicated to his creative process' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-6 items-start"
                initial={shouldAnimate ? { opacity: 0, x: -30 } : undefined}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="font-ui text-sm text-gold tracking-widest shrink-0 w-16 pt-1">
                  {item.year}
                </span>
                <div className="line-gold w-6 shrink-0 mt-3" />
                <p className="font-body text-foreground">{item.event}</p>
              </motion.div>
            ))}
          </div>
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
              Explore <span className="text-gold">Further</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
