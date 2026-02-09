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
      {/* Light theme wrapper for entire page */}
      <div className="bg-[#f7f3eb] text-[#1a1815]">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">Understanding the Tradition</span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 text-[#1a1815]">
                The <span className="text-[#d4a84b] italic">Ghazal</span>
              </h1>
              <p className="font-display text-xl md:text-2xl italic text-[#4a453f] max-w-3xl mx-auto leading-relaxed">
                From Bollywood's Foundation to Modern Renaissance
              </p>
              <p className="text-[#4a453f] text-lg mt-6 max-w-2xl mx-auto">
                Understand the poetic form that shaped Indian cinema and continues to explore human longing
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is a Ghazal */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="border-l-4 border-[#d4a84b] pl-6 md:pl-8">
                <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">The Form</span>
                <h2 className="font-display text-3xl md:text-5xl mb-8 text-[#1a1815]">
                  What is a <span className="text-[#d4a84b]">Ghazal</span>?
                </h2>
              </div>
              
              <div className="prose-poetry text-[#4a453f] space-y-6 mb-8 md:mb-12">
                <p className="text-lg">
                  The ghazal is a poetic form that has captivated audiences for over a millennium. 
                  Originating in 7th-century Arabia and flourishing through Persian and Urdu literary traditions, 
                  the ghazal found a unique home in Punjabi poetry—and later, in the heart of Indian cinema.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-12">
                <div className="p-6 bg-[#faf8f4] border border-[#e8e3d8]">
                  <h3 className="font-display text-xl mb-4 text-[#d4a84b]">The Technical Form</h3>
                  <p className="text-[#4a453f] text-sm mb-4">
                    A ghazal is composed of <strong className="text-[#1a1815]">rhyming couplets</strong> (called <em>sher</em>) 
                    and a <strong className="text-[#1a1815]">refrain</strong> (called <em>radif</em>).
                  </p>
                  <ul className="text-[#4a453f] text-sm space-y-2">
                    <li><span className="text-[#d4a84b]">•</span> Each sher is a self-contained poem</li>
                    <li><span className="text-[#d4a84b]">•</span> Rhyme scheme: AA, BA, CA, DA</li>
                    <li><span className="text-[#d4a84b]">•</span> Maqta: Final couplet with poet's pen name</li>
                  </ul>
                </div>

                <div className="p-6 bg-[#faf8f4] border border-[#e8e3d8]">
                  <h3 className="font-display text-xl mb-4 text-[#d4a84b]">Universal Themes</h3>
                  <ul className="text-[#4a453f] text-sm space-y-2">
                    <li><span className="text-[#d4a84b]">•</span> Longing and separation (<em>ishq</em>)</li>
                    <li><span className="text-[#d4a84b]">•</span> Mysticism and spirituality (Sufi tradition)</li>
                    <li><span className="text-[#d4a84b]">•</span> Beauty and desire</li>
                    <li><span className="text-[#d4a84b]">•</span> Consciousness and existence</li>
                    <li><span className="text-[#d4a84b]">•</span> Loss and remembrance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bollywood's Foundation */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#f7f3eb]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">Cinema & Poetry</span>
              <h2 className="font-display text-3xl md:text-5xl mb-8 text-[#1a1815]">
                The Ghazal as <span className="text-[#d4a84b]">Bollywood's Foundation</span>
              </h2>
              
              <div className="prose-poetry text-[#4a453f] space-y-6 mb-8 md:mb-12">
                <p className="text-lg">
                  When Indian cinema found its voice with the first talkie film, <em>Alam Ara</em> (1931), 
                  <strong className="text-[#1a1815]"> ghazals provided the foundation</strong>. The poetic form dominated 
                  Bollywood music for three decades, establishing a tradition of literary excellence in film lyrics.
                </p>
                <p>
                  During the Golden Era (1930s-1960s), cinema and poetry were inseparable. The ghazal's structure—independent 
                  couplets exploring longing, beauty, and loss—proved perfect for expressing complex emotions in film narratives.
                </p>
              </div>

              <div className="p-8 border-l-4 border-[#d4a84b] bg-[#faf8f4] mb-8 md:mb-12">
                <h3 className="font-display text-xl mb-4 text-[#d4a84b]">The Tazmeen Tradition</h3>
                <p className="text-[#4a453f]">
                  When Bollywood used classical poetry, it followed the <em>tazmeen</em> tradition—<strong className="text-[#1a1815]">adding new verses 
                  to established works as tribute</strong>, not plagiarism. This practice honored the original poet while extending their artistic vision.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Poet-Lyricist Legacy */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-10 md:mb-16"
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">The Masters</span>
              <h2 className="font-display text-3xl md:text-5xl text-[#1a1815]">
                The <span className="text-[#d4a84b]">Poet-Lyricist</span> Legacy
              </h2>
              <p className="text-[#4a453f] mt-4 max-w-2xl mx-auto">
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
                  className="p-6 bg-[#faf8f4] border border-[#e8e3d8] hover:border-[#d4a84b] transition-colors"
                  initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <h3 className="font-display text-2xl mb-1 text-[#1a1815]">{poet.name}</h3>
                  <span className="text-[#d4a84b] font-ui text-xs tracking-wider">{poet.born}</span>
                  <p className="text-[#4a453f] text-sm mt-4 mb-3">{poet.highlight}</p>
                  <p className="text-xs text-[#4a453f]/70 italic">{poet.works}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2025 New Era */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#faf8f4]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">A New Era</span>
              <h2 className="font-display text-3xl md:text-5xl mb-8 text-[#1a1815]">
                2025: <span className="text-[#d4a84b]">Lyricists Rise</span>
              </h2>
              
              <div className="prose-poetry text-[#4a453f] space-y-6 mb-8 md:mb-12">
                <p className="text-lg">
                  In 2025, India's music and screenwriter groups signed a <strong className="text-[#1a1815]">historic agreement 
                  recognizing lyricists as "equal co-authors" and "primary artists"</strong>—not merely contributors.
                </p>
                <div className="p-6 bg-white border border-[#d4a84b]">
                  <p>
                    This marks a cultural shift: quality poetry is increasingly valued in an industry that once prioritized 
                    commercial formulas over literary depth. According to SWA India, there is a <strong className="text-[#1a1815]">"dearth of quality 
                    lyricists in Bollywood"</strong>—creating opportunity for poets with literary excellence and emotional authenticity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Surinder's Place */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">The Living Tradition</span>
              <h2 className="font-display text-3xl md:text-5xl mb-8 text-[#1a1815]">
                Surinder Seerat's <span className="text-[#d4a84b]">Place</span> in This Tradition
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">
                {[
                  { icon: Award, title: 'Technical Mastery', desc: 'Kirchan (1990) won JKAACL Award for "pure form ghazals"' },
                  { icon: BookOpen, title: 'Philosophical Depth', desc: 'Physicist background brings unique epistemological perspective' },
                  { icon: Music, title: 'Musical Demonstration', desc: 'Tishnagi ghazal album shows cinematic potential' },
                  { icon: Users, title: 'Institutional Impact', desc: 'Founded two literary organizations preserving tradition abroad' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-6 bg-[#faf8f4] border border-[#e8e3d8] flex gap-4 hover:border-[#d4a84b] transition-colors"
                    initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-6 h-6 text-[#d4a84b] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg mb-2 text-[#1a1815]">{item.title}</h3>
                      <p className="text-[#4a453f] text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-[#4a453f] text-lg italic text-center border-t border-[#e8e3d8] pt-8">
                His work honors classical form while engaging contemporary questions—exactly what the tradition demands for continued relevance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* For Creative Professionals */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#f7f3eb]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div>
                  <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-4">Collaboration</span>
                  <h2 className="font-display text-3xl md:text-4xl mb-6 text-[#1a1815]">
                    For Creative <span className="text-[#d4a84b]">Professionals</span>
                  </h2>
                  
                  <div className="space-y-4 text-[#4a453f]">
                    <p>
                      Music directors, lyricists, and filmmakers: <em className="text-[#1a1815]">Tishnagi</em> demonstrates 
                      the cinematic potential of Seerat's ghazals.
                    </p>
                    <p>
                      The Bollywood tradition has long recognized that the greatest film music comes from authentic poetry. 
                      From Gulzar to Javed Akhtar, poet-lyricists have shaped Indian cinema's soul.
                    </p>
                    <p>
                      Seerat's work continues this tradition—ghazals with technical mastery and emotional depth, 
                      ready for contemporary adaptation.
                    </p>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#d4a84b] text-[#1a1815] font-ui text-sm tracking-wider rounded-full hover:bg-[#c49a3d] transition-colors"
                  >
                    Inquire About Collaboration
                    <ArrowRight size={16} />
                  </Link>
                </div>
                
                {/* Right Column - Elegant Card */}
                <motion.div 
                  className="relative"
                  initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Decorative outer frame - hidden on mobile for cleaner look */}
                  <div className="absolute -inset-2 md:-inset-3 border border-[#d4a84b]/30 hidden sm:block" />
                  
                  {/* Main card */}
                  <div className="relative bg-white border border-[#d4a84b] p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                    {/* Gold corner accents - smaller on mobile */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-[#d4a84b]" />
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-[#d4a84b]" />
                    
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#d4a84b] mb-3 sm:mb-4 md:mb-6">
                      The Bollywood Precedent
                    </h3>
                    
                    <p className="text-[#1a1815] mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm leading-relaxed">
                      Punjabi poetry has found renewed life in contemporary Indian cinema:
                    </p>
                    
                    <ul className="space-y-2 sm:space-y-3 text-[#4a453f] text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-[#d4a84b] mt-0.5 sm:mt-1 text-xs sm:text-sm">◆</span>
                        <span>Shiv Kumar Batalvi's poems in <em className="text-[#1a1815]">Love Aaj Kal</em> (2009)</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-[#d4a84b] mt-0.5 sm:mt-1 text-xs sm:text-sm">◆</span>
                        <span>Poetry adaptations in <em className="text-[#1a1815]">Udta Punjab</em> (2016)</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-[#d4a84b] mt-0.5 sm:mt-1 text-xs sm:text-sm">◆</span>
                        <span>Gulzar's Sufi-inspired lyrics throughout his career</span>
                      </li>
                    </ul>
                    
                    <p className="text-[#4a453f] text-[10px] sm:text-xs italic border-t border-[#e8e3d8] pt-3 sm:pt-4">
                      Quality poetry transcends time. Seerat's ghazals await discovery.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Answer Blocks for SEO */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            <AnswerBlock
              id="what-is-ghazal"
              question="What is a ghazal?"
              answer="A ghazal is a poetic form originating in 7th-century Arabia, composed of rhyming couplets (sher) and a refrain (radif). Each couplet stands alone as a complete thought while exploring themes of longing, mysticism, beauty, and consciousness. The form shaped Indian cinema through Bollywood's golden era and continues to captivate audiences today."
              lightTheme
            />
            
            <AnswerBlock
              id="ghazal-bollywood-connection"
              question="How did ghazals influence Bollywood?"
              answer="Ghazals provided the foundation for Bollywood music from the first talkie film Alam Ara (1931) through the 1960s. Legendary poet-lyricists like Gulzar, Javed Akhtar, and Irshad Kamil brought literary excellence to film, establishing a tradition where poetry and cinema were inseparable. In 2025, lyricists were officially recognized as 'equal co-authors' in Indian film music."
              lightTheme
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#faf8f4]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-[#1a1815]">
                Explore <span className="text-[#d4a84b]">Further</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/tishnagi" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#d4a84b] text-[#1a1815] font-ui text-sm tracking-wider rounded-full hover:bg-[#c49a3d] transition-colors"
                >
                  Listen to Tishnagi
                  <ArrowRight size={16} />
                </Link>
                <Link 
                  to="/books" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#d4a84b] text-[#1a1815] font-ui text-sm tracking-wider rounded-full hover:bg-[#f0ead4] transition-colors"
                >
                  Browse the Books
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default GhazalHistory;
