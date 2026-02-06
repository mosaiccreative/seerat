import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { ArrowRight, ExternalLink, Music, BookOpen, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { EmailCapture } from '@/components/sections/EmailCapture';

const Tishnagi = () => {
  const { shouldAnimate } = useMotionPreference();

  useEffect(() => {
    document.title = 'Tishnagi: Ghazals That Sing — Surinder Seerat';
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
            <span className="chapter-label block">The Album</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4">
              <span className="text-gold italic">Tishnagi</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground italic mb-8">
              तिश्नगी · ਤਿਸ਼ਨਗੀ
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              <strong className="text-foreground">Thirst</strong> — The unquenchable longing that defines the human condition.
              <br />
              Experience Surinder Seerat's ghazals through music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Album Description */}
      <section className="py-24 px-6 md:px-12 bg-card">
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
                    <em>Tishnagi</em> demonstrates what makes Surinder's poetry compelling: 
                    <strong className="text-foreground"> longing expressed through technical mastery</strong>.
                  </p>
                  <p>
                    These aren't just words on a page. They're meant to be heard, felt, experienced.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Music className="w-24 h-24 text-gold/60 mx-auto mb-6" />
                    <p className="font-display text-2xl text-gold">Tishnagi</p>
                    <p className="text-muted-foreground text-sm mt-2">Ghazal Album</p>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-gold/20 -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Listen Now */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">Listen Now</span>
            <h2 className="font-display text-3xl md:text-5xl mb-12">
              Stream <span className="text-gold">Tishnagi</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://www.youtube.com/@SurinderSinghSeerat"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-border/50 hover:border-gold/50 transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-2">YouTube</h3>
                <p className="text-muted-foreground text-sm mb-4">Watch and listen with video</p>
                <span className="text-gold text-xs font-ui tracking-wider flex items-center gap-1">
                  OPEN <ExternalLink size={12} />
                </span>
              </a>

              <a
                href="https://soundcloud.com/surinderseerat"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-border/50 hover:border-gold/50 transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.01-.057-.049-.1-.099-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.044.094.104.094.058 0 .091-.037.102-.094l.196-1.282-.196-1.332c-.011-.057-.044-.094-.102-.094m1.8-1.093c-.066 0-.108.042-.115.109l-.196 2.41.196 2.322c.007.066.049.109.115.109.064 0 .107-.043.116-.109l.222-2.322-.222-2.41c-.009-.067-.052-.109-.116-.109m.899-.828c-.073 0-.121.048-.127.122l-.178 3.238.178 3.073c.006.074.054.122.127.122.072 0 .12-.048.128-.122l.2-3.073-.2-3.238c-.008-.074-.056-.122-.128-.122m.905-.281c-.079 0-.133.053-.14.134l-.161 3.519.161 3.334c.007.08.061.133.14.133.076 0 .131-.053.139-.133l.183-3.334-.183-3.519c-.008-.081-.063-.134-.139-.134m.896-.434c-.085 0-.144.058-.151.146l-.145 3.953.145 3.536c.007.087.066.145.151.145.083 0 .142-.058.15-.145l.165-3.536-.165-3.953c-.008-.088-.067-.146-.15-.146m.902-.262c-.092 0-.156.063-.164.156l-.128 4.215.128 3.625c.008.093.072.156.164.156.09 0 .154-.063.163-.156l.145-3.625-.145-4.215c-.009-.093-.073-.156-.163-.156m.9-.198c-.098 0-.168.068-.176.169l-.111 4.413.111 3.682c.008.1.078.168.176.168.096 0 .167-.068.176-.168l.127-3.682-.127-4.413c-.009-.101-.08-.169-.176-.169m.905-.09c-.104 0-.18.073-.188.18l-.095 4.503.095 3.718c.008.106.084.18.188.18.102 0 .178-.074.187-.18l.108-3.718-.108-4.503c-.009-.107-.085-.18-.187-.18m.902.07c-.111 0-.192.078-.2.192l-.079 4.433.079 3.744c.008.113.089.191.2.191.109 0 .19-.078.199-.191l.091-3.744-.091-4.433c-.009-.114-.09-.192-.199-.192m.906.12c-.116 0-.203.083-.212.203l-.062 4.313.062 3.756c.009.12.096.203.212.203.114 0 .201-.083.211-.203l.071-3.756-.071-4.313c-.01-.12-.097-.203-.211-.203m.902.188c-.122 0-.215.088-.224.213l-.045 4.125.045 3.756c.009.126.102.214.224.214.12 0 .213-.088.223-.214l.052-3.756-.052-4.125c-.01-.125-.103-.213-.223-.213m.902.258c-.128 0-.227.094-.236.226l-.028 3.867.028 3.744c.009.131.108.225.236.225.127 0 .226-.094.236-.225l.032-3.744-.032-3.867c-.01-.132-.109-.226-.236-.226m1.69-.125c-.209 0-.378.169-.378.379v7.891c0 .21.169.379.378.379h5.656c1.317 0 2.385-1.068 2.385-2.386 0-1.317-1.068-2.385-2.385-2.385-.365 0-.711.083-1.02.229-.215-2.056-1.963-3.661-4.087-3.661-.558 0-1.091.119-1.573.333-.155.069-.197.14-.2.278v6.834"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl mb-2">SoundCloud</h3>
                <p className="text-muted-foreground text-sm mb-4">Stream the full album</p>
                <span className="text-gold text-xs font-ui tracking-wider flex items-center gap-1">
                  OPEN <ExternalLink size={12} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-24 px-6 md:px-12 bg-card">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </motion.div>
        </div>
      </section>

      {/* Answer Block for SEO */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnswerBlock
            id="tishnagi-album"
            question="What is Tishnagi?"
            answer="Tishnagi (meaning 'thirst' in Punjabi) is a ghazal album by Surinder Singh Seerat, available on YouTube and SoundCloud. The album demonstrates his poetry's musical potential, expressing themes of longing, consciousness, and the human condition through traditional ghazal form. It serves as an accessible entry point for those discovering his work."
            sourceLabel="Tishnagi Album"
            sourceUrl="https://www.surinderseerat.com/tishnagi/"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-2xl mx-auto">
          <EmailCapture
            headline="Stay Updated"
            description="Join our mailing list for news about performances, new recordings, and poetry updates."
            buttonText="Subscribe"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section">
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
              <Link to="/ghazal-history" className="btn-minimal">
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
