import { motion } from 'framer-motion';
import { Clock, GraduationCap, Users, BookOpen } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const courseFAQ = [
  {
    question: 'Who is the course for?',
    answer: 'This course is designed for poetry enthusiasts, aspiring poets, and anyone interested in exploring the depths of Punjabi literary traditions. No prior experience required.'
  },
  {
    question: 'What will I learn?',
    answer: 'You\'ll explore the art of ghazals, free verse, and traditional forms. Learn to craft meaningful poetry that resonates with readers across cultures.'
  },
  {
    question: 'How long is the course?',
    answer: 'The course structure and duration will be announced soon. Join the waitlist to be the first to know.'
  },
  {
    question: 'Will there be live sessions?',
    answer: 'The cohort experience includes live sessions with Surinder Seerat. Self-paced options are also available for those who prefer flexibility.'
  }
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Learn the Art of Poetry with Surinder Seerat",
  "description": "A comprehensive course on ghazals, free-verse, and the craft of meaningful poetry taught by award-winning poet Surinder Seerat.",
  "provider": {
    "@type": "Person",
    "name": "Surinder Singh Seerat"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online"
  }
};

const Course = () => {
  const { shouldAnimate } = useMotionPreference();

  return (
    <PageLayout>
      <SEO
        title="Poetry Course"
        description="Learn the art of ghazals and free-verse poetry from award-winning Punjabi poet Surinder Seerat. Coming soon: self-paced and cohort learning options."
        canonical="/course"
        keywords="poetry course, learn ghazal, Punjabi poetry class, creative writing, Surinder Seerat course"
        schema={courseSchema}
      />
      {/* Hero */}
      <section className="page-section relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, hsl(38 75% 55%) 0%, transparent 60%)',
            }}
          />
        </div>
        
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 mb-8">
            <Clock className="w-4 h-4 text-gold" />
            <span className="font-ui text-sm tracking-wide text-gold">Coming Soon</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Learn the Art of
            <br />
            <span className="text-gold italic">Poetry</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            A comprehensive course on ghazals, free-verse, and the craft of meaningful poetry — 
            taught by Surinder Seerat with five decades of literary experience.
          </p>
        </motion.div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-16 px-6 md:px-12">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <EmailCapture
            endpoint="course-waitlist"
            headline="Join the Waitlist"
            description="Be the first to enroll when the course launches."
            buttonText="Join Waitlist"
            showFirstName
          />
        </motion.div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">The Journey</span>
            <h2 className="font-display text-3xl md:text-4xl">
              What You'll <span className="text-gold">Discover</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              className="p-8 border border-border/50"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-ui text-xs text-gold tracking-widest">
                MODULE 1
              </span>
              <h3 className="font-display text-xl mt-3 mb-3">The Ghazal Form</h3>
              <p className="text-muted-foreground text-sm">
                Master the classical form, meters, and intellectual depth of ghazals—the most sophisticated poetic form.
              </p>
            </motion.div>
            
            <motion.div
              className="p-8 border border-border/50"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="font-ui text-xs text-gold tracking-widest">
                MODULE 2
              </span>
              <h3 className="font-display text-xl mt-3 mb-3">Free-Verse Poetry</h3>
              <p className="text-muted-foreground text-sm">
                Break constraints while building poetic power and meaning without traditional confines.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="text-center"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl md:text-3xl italic text-muted-foreground">
              Finding Your Voice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Choose Your <span className="text-gold">Path</span>
            </h2>
            <p className="text-muted-foreground">
              Two ways to experience the course.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Self-Paced */}
            <motion.div
              className="p-8 md:p-10 border border-border/50 flex flex-col"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-3">Self-Paced</h3>
              <p className="text-muted-foreground mb-6">
                Learn at your own rhythm with recorded lessons, exercises, 
                and lifetime access to all materials.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> 8 all-in-one lessons
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Downloadable materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Community access
                </li>
              </ul>
              <p className="font-display text-2xl mb-6">[PLACEHOLDER PRICE]</p>
              <Button 
                variant="outline" 
                className="w-full border-gold/50 text-gold hover:bg-gold/10 hover:text-gold mt-auto"
              >
                Learn More
              </Button>
            </motion.div>
            
            {/* Cohort */}
            <motion.div
              className="p-8 md:p-10 border-2 border-gold/50 relative flex flex-col"
              initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-3 left-8 bg-gold text-ink px-3 py-1 font-ui text-xs tracking-wide">
                RECOMMENDED
              </div>
              <Users className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-3">Cohort Experience</h3>
              <p className="text-muted-foreground mb-6">
                Learn alongside peers with live sessions, direct feedback, 
                and personalized guidance from Surinder Seerat.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Two sessions with Surinder
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Private poet feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span> Certificate of completion
                </li>
              </ul>
              <p className="font-display text-2xl mb-6">[PLACEHOLDER PRICE]</p>
              <Button 
                className="w-full bg-gold text-ink hover:bg-gold/90 mt-auto"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl">
              Common <span className="text-gold">Questions</span>
            </h2>
          </motion.div>
          
          <FAQAccordion items={courseFAQ} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <GraduationCap className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl mb-4">
            Don't Miss the Launch
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the waitlist for early access and exclusive launch pricing.
          </p>
          <EmailCapture variant="minimal" endpoint="course-waitlist" buttonText="Join Waitlist" showFirstName />
        </div>
      </section>
    </PageLayout>
  );
};

export default Course;