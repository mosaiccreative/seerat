 import { useParams, Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { ArrowLeft, Award, BookOpen, User } from 'lucide-react';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { books } from '@/data/books';
 import { useEffect } from 'react';
 
 const BookDetail = () => {
   const { id } = useParams<{ id: string }>();
   const { shouldAnimate } = useMotionPreference();
   const book = books.find(b => b.id === id);
 
   useEffect(() => {
     if (book) {
       document.title = `${book.title} — Surinder Seerat`;
     }
   }, [book]);
 
   if (!book) {
     return (
       <PageLayout>
         <section className="page-section">
           <div className="text-center">
             <h1 className="font-display text-4xl mb-4">Book Not Found</h1>
             <p className="text-muted-foreground mb-8">
               The book you're looking for doesn't exist.
             </p>
             <Link to="/books" className="btn-gold">
               <ArrowLeft className="w-4 h-4" />
               Back to All Works
             </Link>
           </div>
         </section>
       </PageLayout>
     );
   }
 
   // Get related books (same type, excluding current)
   const relatedBooks = books
     .filter(b => b.id !== book.id && b.type === book.type)
     .slice(0, 3);
 
   return (
     <PageLayout>
       {/* Back Navigation */}
       <div className="container mx-auto px-6 md:px-12 pt-8">
         <Link 
           to="/books" 
           className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-ui text-sm tracking-wide"
         >
           <ArrowLeft className="w-4 h-4" />
           Back to All Works
         </Link>
       </div>
 
       {/* Hero Section */}
       <section className="py-16 md:py-24 px-6 md:px-12">
         <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
             {/* Book Cover */}
             <motion.div
               className="relative max-w-md mx-auto lg:mx-0"
               initial={shouldAnimate ? { opacity: 0, x: -40 } : undefined}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
               <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                 {/* Gold frame accent */}
                 <div className="absolute -inset-3 border border-gold/30" />
                 <div className="absolute -inset-6 border border-gold/10" />
                 
                 {book.coverImage ? (
                   <img
                     src={book.coverImage}
                     alt={book.title}
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <div className="w-full h-full bg-secondary flex items-center justify-center">
                     <BookOpen className="w-16 h-16 text-muted-foreground" />
                   </div>
                 )}
               </div>
               
               {/* Award Badge */}
               {book.award && (
                 <motion.div
                   className="absolute -top-4 -right-4 bg-gold text-ink px-4 py-2 flex items-center gap-2 shadow-lg"
                   initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : undefined}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.4, duration: 0.5 }}
                 >
                   <Award className="w-4 h-4" />
                   <span className="font-ui text-xs tracking-wide uppercase">Award Winner</span>
                 </motion.div>
               )}
             </motion.div>
 
             {/* Book Details */}
             <motion.div
               initial={shouldAnimate ? { opacity: 0, x: 40 } : undefined}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <span className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-4 block">
                 {book.year} • {book.type}
               </span>
               
               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                 {book.title}
               </h1>
               
               {book.titlePunjabi && (
                 <p className="text-2xl text-muted-foreground mb-6 font-display italic">
                   {book.titlePunjabi}
                 </p>
               )}
               
               <div className="line-gold w-16 mb-8" />
               
               <div className="prose-poetry text-lg leading-relaxed text-muted-foreground mb-8">
                 <p>{book.description}</p>
               </div>
               
               {/* Metadata */}
               <div className="space-y-4 mb-10">
                 {book.foreword && (
                   <div className="flex items-start gap-3">
                     <User className="w-5 h-5 text-gold mt-0.5" />
                     <div>
                       <span className="font-ui text-xs tracking-wide text-muted-foreground uppercase">
                         Foreword by
                       </span>
                       <p className="font-display text-lg">{book.foreword}</p>
                     </div>
                   </div>
                 )}
                 
                 {book.award && (
                   <div className="flex items-start gap-3">
                     <Award className="w-5 h-5 text-gold mt-0.5" />
                     <div>
                       <span className="font-ui text-xs tracking-wide text-muted-foreground uppercase">
                         Award
                       </span>
                       <p className="font-display text-lg">{book.award}</p>
                     </div>
                   </div>
                 )}
               </div>
               
               {/* CTA */}
               <Link to="/store" className="btn-gold">
                 Get This Book
               </Link>
             </motion.div>
           </div>
         </div>
       </section>
 
       {/* Related Books */}
       {relatedBooks.length > 0 && (
         <section className="py-24 px-6 md:px-12 bg-card">
           <div className="max-w-6xl mx-auto">
             <motion.div
               className="text-center mb-16"
               initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <span className="chapter-label block">More to Explore</span>
               <h2 className="font-display text-3xl md:text-4xl">
                 Related <span className="text-gold">Works</span>
               </h2>
             </motion.div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {relatedBooks.map((related, index) => (
                 <motion.div
                   key={related.id}
                   initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                 >
                   <Link
                     to={`/books/${related.id}`}
                     className="group block relative aspect-[3/4] overflow-hidden bg-secondary"
                   >
                     {related.coverImage && (
                       <img
                         src={related.coverImage}
                         alt={related.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                     
                     <div className="absolute bottom-0 left-0 right-0 p-6">
                       <span className="font-ui text-xs text-gold tracking-wider">
                         {related.year}
                       </span>
                       <h3 className="font-display text-xl mt-2">{related.title}</h3>
                     </div>
                   </Link>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       )}
     </PageLayout>
   );
 };
 
 export default BookDetail;