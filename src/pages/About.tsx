import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import poetPortrait from '@/assets/poet-portrait.jpg';

// EXACT text from homepage - DO NOT MODIFY
const aboutText = `Seerat had a surreal journey making his way from a small village in India to his current life in California. He received his Bachelors in Science, Physics, Chemistry, Mathematics and General English from Amar Singh Degree College, J&K, India in March of 1966 and then went on to receive his Masters in Science degree in Physics, with an emphasis in Electronics from the University of Kashmir, J&K, India in Oct of 1969. Over the years he published seven poetry books, one novel, one short story and a book on Punjabi critics. Professionally, Seerat gravitated towards the teaching profession. He worked as a Professor of Physics over a period of twenty years, primarily at G.G.M. Sc. College in the city of Jammu, India. He worked at world-renowned and prestigious top technology companies like IBM and Iomega. He, later, went on to pursue a management role at USPS. Throughout his life, he continued his passion for poetry and wrote many poems and gazals. With his appetite towards literature combined with his leadership skills, he envisioned and founded a Punjabi literary organization, 'Punjabi Sahit Sabha California' (PSSC). This embarked a new era of Punjabi Literature in California w.e.f. 1992. In 2002, he further co-founded a more seasoned organization 'Vishav Punjabi Sahit Academy, California'. He truly admires his poet peers and the pedigree of talent that surrounds him at 'Vishav Punjabi Sahit Academy, California'. In 2011, he decided to go on a sabbatical and work on composing and publishing his poetry in the form of ghazals full time.`;

const About = () => {
  const { shouldAnimate } = useMotionPreference();

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
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
              About <span className="text-gold italic">Surinder</span>
              <br />Seerat
            </h1>
            <p className="font-display text-xl md:text-2xl italic text-muted-foreground max-w-2xl mx-auto">
              "Koi pujjay ga merey teek meri roshni phar ke"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait + Bio */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="relative"
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
            className="prose-poetry text-muted-foreground"
            initial={shouldAnimate ? { opacity: 0, x: 40 } : undefined}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="drop-cap">
              {aboutText}
            </p>
          </motion.article>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Timeline</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Key <span className="text-gold">Milestones</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '1966', event: 'B.Sc. from Amar Singh Degree College, J&K, India' },
              { year: '1969', event: 'M.Sc. Physics (Electronics) from University of Kashmir' },
              { year: '1980', event: 'First book "Chhallan" published' },
              { year: '1992', event: 'Founded Punjabi Sahit Sabha California (PSSC)' },
              { year: '2002', event: 'Co-founded Vishav Punjabi Sahit Academy, California' },
              { year: '2011', event: 'Sabbatical to focus on poetry and ghazals full-time' },
              { year: '2014', event: 'Published "Aroope Akhran da Aks"' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-8 items-center"
                initial={shouldAnimate ? { opacity: 0, x: -30 } : undefined}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="font-ui text-sm text-gold tracking-widest shrink-0 w-20">
                  {item.year}
                </span>
                <div className="line-gold w-8 shrink-0" />
                <p className="font-body text-lg text-foreground">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-16"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Career</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Professional <span className="text-gold">Journey</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Professor of Physics', place: 'G.G.M. Sc. College, Jammu', duration: '20 years' },
              { role: 'Technology Professional', place: 'IBM & Iomega', duration: '' },
              { role: 'Management', place: 'USPS', duration: '' },
            ].map((item, index) => (
              <motion.div 
                key={item.place} 
                className="p-8 border border-border/50 text-left"
                initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-xl mb-2">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.place}</p>
                {item.duration && (
                  <p className="text-gold font-ui text-xs mt-3 tracking-wider">{item.duration}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;