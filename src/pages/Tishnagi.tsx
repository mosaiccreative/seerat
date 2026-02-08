import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ArrowRight, ExternalLink, Music, BookOpen, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { AnswerBlock } from '@/components/sections/AnswerBlock';

const tishnagiCover = '/images/tishnagi-cover.jpg';

const Tishnagi = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'Tishnagi: Ghazals That Sing — Surinder Seerat';
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">The Album</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4">
              <span className="text-gold italic">Tishnagi</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground italic mb-8">
              तिश्नगी · ਤਿਸ਼ਨਗੀ
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              <strong className="text-foreground">Thirst</strong> — The unquenchable longing that defines the human condition.
              <br />
              Experience Surinder Seerat's ghazals through music.
            </p>
            
            {/* Stream CTAs - Artsy Modern Design */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@SurinderSinghSeerat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-gold/10 to-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-background via-card to-background border border-gold/20 rounded-full group-hover:border-gold/50 transition-all duration-500">
                  {/* Animated ring */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/30 to-gold/20 animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-red-600/30 to-red-900/50 flex items-center justify-center backdrop-blur-sm border border-red-500/30">
                      <svg className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <span className="block font-display text-lg text-foreground group-hover:text-gold transition-colors">Watch on YouTube</span>
                    <span className="block text-xs text-muted-foreground/70 font-ui tracking-wide">Video & lyrics</span>
                  </div>
                  
                  <ExternalLink size={14} className="text-muted-foreground/50 group-hover:text-gold transition-colors ml-2" />
                </div>
              </motion.a>

              {/* SoundCloud */}
              <motion.a
                href="https://soundcloud.com/surinderseerat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-gold/10 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-background via-card to-background border border-gold/20 rounded-full group-hover:border-gold/50 transition-all duration-500">
                  {/* Animated ring */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/30 to-gold/20 animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-900/50 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                      <svg className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-1.607-1.13-2.939-2.621-3.09-.064.015-.203-.725-1.5-.725zm-9.879 5.921v-10.501c-.371-.18-.771-.286-1.197-.286-.549 0-1.06.154-1.501.42l-.302-.18v10.547h3z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <span className="block font-display text-lg text-foreground group-hover:text-gold transition-colors">Stream on SoundCloud</span>
                    <span className="block text-xs text-muted-foreground/70 font-ui tracking-wide">Full album</span>
                  </div>
                  
                  <ExternalLink size={14} className="text-muted-foreground/50 group-hover:text-gold transition-colors ml-2" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Album Description */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="chapter-label block">Why Listen</span>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  Ghazals Were <span className="text-gold">Meant to Be Sung</span>
                </h2>
                
                <div className="prose-poetry text-muted-foreground space-y-4">
                  <p>
                    Reading poetry engages the mind. <strong className="text-foreground">Hearing it sung engages the soul.</strong>
                  </p>
                  <p>
                    The ghazal form—with its refrain and rhyme scheme—is inherently melodic. 
                    The form evolved in royal courts where poet-musicians would perform their compositions, 
                    the melody revealing meanings that text alone could not convey.
                  </p>
                  <p>
                    This album brings Surinder's ghazals to life as they were intended—not just words on a page, 
                    but <strong className="text-foreground">sound, feeling, experience</strong>.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={tishnagiCover}
                    alt="Tishnagi Album Cover - Sunset over water"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-gold/20 -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme of Longing - Burgundy Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-burgundy text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              The Theme of Longing
            </h2>
            
            <p className="font-display text-xl md:text-2xl italic mb-8 text-cream/90">
              "Reading poetry engages the mind. Hearing it sung engages the soul."
            </p>
            
            <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              The ghazal form has explored longing for over a thousand years. In Seerat's hands, that 
              longing becomes philosophical—a thirst not just for love, but for understanding, for meaning, 
              for what lies beyond the reach of language.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Understanding Tishnagi - Combined Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block text-center">The Meaning</span>
            <h2 className="font-display text-3xl md:text-5xl mb-12 text-center">
              Understanding <span className="text-gold">Tishnagi</span>
            </h2>
            
            {/* Theme Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { 
                  icon: Heart, 
                  title: 'Longing', 
                  desc: 'The thirst that cannot be quenched—desire as the engine of existence'
                },
                { 
                  icon: BookOpen, 
                  title: 'Consciousness', 
                  desc: 'What lies beyond measurement? The physicist-poet explores unknowable depths'
                },
                { 
                  icon: Music, 
                  title: 'Expression', 
                  desc: 'Technical ghazal mastery serving emotional truth through melody'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 border border-border/50 text-center"
                  initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* What is Tishnagi - Integrated */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-border/30">
              <AnswerBlock
                id="tishnagi-album"
                question="What is Tishnagi?"
                answer="Tishnagi (meaning 'thirst' in Punjabi) is a ghazal album by Surinder Singh Seerat, available on YouTube and SoundCloud. The album demonstrates his poetry's musical potential, expressing themes of longing, consciousness, and the human condition through traditional ghazal form. It serves as an accessible entry point for those discovering his work."
                sourceLabel="Tishnagi Album"
                sourceUrl="https://www.surinderseerat.com/tishnagi/"
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Go <span className="text-gold">Deeper</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books" className="btn-gold">
                Read the Poetry
                <ArrowRight size={16} />
              </Link>
              <Link to="/course" className="btn-minimal">
                Understand the Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tishnagi;
