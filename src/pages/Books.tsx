 import { motion } from 'framer-motion';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { SectionHeading } from '@/components/sections/SectionHeading';
 import { BookCard } from '@/components/sections/BookCard';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { books } from '@/data/books';
 import paperTexture from '@/assets/paper-texture.jpg';
 
 const Books = () => {
   const { shouldAnimate } = useMotionPreference();
 
   return (
     <PageLayout>
       {/* Hero Section */}
       <section className="pt-32 pb-20 px-6 relative">
         <div 
           className="absolute inset-0 opacity-10"
           style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover' }}
           aria-hidden="true"
         />
         <div className="container mx-auto max-w-4xl relative z-10">
           <motion.div
             className="text-center"
             initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="font-ui text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
               The Collection
             </span>
             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
               Books
             </h1>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Eight published works spanning poetry, ghazals, novels, and literary criticism — 
               a lifetime of exploring the depths of human experience through words.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Books Grid */}
       <section className="section-editorial bg-paper-warm">
         <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {books.map((book, index) => (
               <BookCard
                 key={book.id}
                 title={book.title}
                 year={book.year}
                 description={book.description}
                 coverImage={book.coverImage}
                 award={book.award}
                 index={index}
               />
             ))}
           </div>
         </div>
       </section>
 
       {/* Awards Recognition */}
       <section className="section-editorial">
         <div className="container mx-auto max-w-3xl text-center">
           <SectionHeading
             label="Recognition"
             title="Literary Awards"
             description="Multiple works honored by the Jammu & Kashmir Academy of Art, Culture and Languages"
           />
           
           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             {[
               { year: '1982', book: 'Chhallan', award: 'Best Punjabi Book' },
               { year: '1987', book: 'Bharam Bhullayan', award: 'Best Book' },
               { year: '1991', book: 'Kirchan', award: 'Best Book' },
             ].map((item, index) => (
               <motion.div
                 key={item.year}
                 className="p-6 bg-card border border-border/50"
                 initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
               >
                 <span className="font-ui text-xs text-accent tracking-wide">{item.year}</span>
                 <h3 className="font-display text-xl mt-2">{item.book}</h3>
                 <p className="text-sm text-muted-foreground mt-1">{item.award}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </section>
     </PageLayout>
   );
 };
 
 export default Books;