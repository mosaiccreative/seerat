import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { AnswerBlock } from '@/components/sections/AnswerBlock';
import { books } from '@/data/books';
 import { useEffect } from 'react';

const Books = () => {
  const { shouldAnimate } = useMotionPreference();

   useEffect(() => {
     document.title = 'Eight Published Works — Surinder Seerat';
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
            <span className="chapter-label block">The Collection</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
              Eight <span className="text-gold italic">Published</span>
              <br />Works
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Poetry, ghazals, novels, and literary criticism — 
              a lifetime exploring the depths of human experience through words.
            </p>
          </motion.div>
        </div>
      </section>

       {/* Answer Block for SEO */}
       <section className="py-12 px-6 md:px-12 border-b border-border/30">
         <div className="max-w-3xl mx-auto">
           <AnswerBlock
             id="published-works"
             question="How many books has Surinder Seerat published?"
             answer="Surinder Seerat has published eight books spanning five decades (1980-2014), including poetry collections, ghazals, a novel, and literary criticism. Three of his works have received the Best Book Award from J&K Academy of Art Culture and Languages."
             sourceLabel="Official Works Collection"
             sourceUrl="https://www.surinderseerat.com/books/"
           />
         </div>
       </section>
 
      {/* Books Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
               <Link
                key={book.id}
                 to={`/books/${book.id}`}
                 className="block"
              >
                 <motion.article
                   className="group relative aspect-[3/4] overflow-hidden bg-card"
                   initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: index * 0.1 }}
                 >
                   {book.coverImage && (
                     <img
                       src={book.coverImage}
                       alt={book.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                   
                   <div className="absolute inset-0 p-6 flex flex-col justify-end">
                     <span className="font-ui text-xs text-gold tracking-wider mb-2">{book.year}</span>
                     <h3 className="font-display text-xl md:text-2xl mb-2">{book.title}</h3>
                     <p className="text-muted-foreground text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       {book.description}
                     </p>
                     {book.award && (
                       <p className="mt-3 font-ui text-xs text-gold tracking-wide">
                         ★ {book.award}
                       </p>
                     )}
                   </div>
                 </motion.article>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Recognition */}
      <section className="page-section bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="chapter-label block">Recognition</span>
            <h2 className="font-display text-4xl md:text-5xl mb-16">
              Literary <span className="text-gold">Awards</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '1982', book: 'Chhallan', award: 'Best Punjabi Book — JKAACL' },
              { year: '1987', book: 'Bharam Bhullayan', award: 'Best Book — JKAACL' },
              { year: '1991', book: 'Kirchan', award: 'Best Book — JKAACL' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="p-8 border border-border/50 text-left"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <span className="font-ui text-xs text-gold tracking-widest">{item.year}</span>
                <h3 className="font-display text-2xl mt-3 mb-2">{item.book}</h3>
                <p className="text-muted-foreground text-sm">{item.award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Books;