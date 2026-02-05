 import { motion } from 'framer-motion';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import paperTexture from '@/assets/paper-texture.jpg';
 
 // EXACT text from homepage - DO NOT MODIFY
 const aboutText = `Seerat had a surreal journey making his way from a small village in India to his current life in California. He received his Bachelors in Science, Physics, Chemistry, Mathematics and General English from Amar Singh Degree College, J&K, India in March of 1966 and then went on to receive his Masters in Science degree in Physics, with an emphasis in Electronics from the University of Kashmir, J&K, India in Oct of 1969. Over the years he published seven poetry books, one novel, one short story and a book on Punjabi critics. Professionally, Seerat gravitated towards the teaching profession. He worked as a Professor of Physics over a period of twenty years, primarily at G.G.M. Sc. College in the city of Jammu, India. He worked at world-renowned and prestigious top technology companies like IBM and Iomega. He, later, went on to pursue a management role at USPS. Throughout his life, he continued his passion for poetry and wrote many poems and gazals. With his appetite towards literature combined with his leadership skills, he envisioned and founded a Punjabi literary organization, 'Punjabi Sahit Sabha California' (PSSC). This embarked a new era of Punjabi Literature in California w.e.f. 1992. In 2002, he further co-founded a more seasoned organization 'Vishav Punjabi Sahit Academy, California'. He truly admires his poet peers and the pedigree of talent that surrounds him at 'Vishav Punjabi Sahit Academy, California'. In 2011, he decided to go on a sabbatical and work on composing and publishing his poetry in the form of ghazals full time.`;
 
 const About = () => {
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
               Biography
             </span>
             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
               About Surinder Seerat
             </h1>
             <p className="font-display text-xl md:text-2xl italic text-muted-foreground">
               "Koi pujjay ga merey teek meri roshni phar ke<br />
               Meri bhatkan da 'seerat' taar ke oh mull jayega"
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Main Biography - EXACT TEXT */}
       <section className="section-editorial">
         <div className="container mx-auto max-w-3xl">
           <motion.article
             className="prose-lantern"
             initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <p className="first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1">
               {aboutText}
             </p>
           </motion.article>
         </div>
       </section>
 
       {/* Timeline / Milestones */}
       <section className="section-editorial bg-paper-warm">
         <div className="container mx-auto max-w-4xl">
           <motion.h2
             className="font-display text-3xl md:text-4xl text-center mb-16"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             Key Milestones
           </motion.h2>
 
           <div className="space-y-12">
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
                 className="flex gap-8 items-start"
                 initial={shouldAnimate ? { opacity: 0, x: -30 } : undefined}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
               >
                 <span className="font-ui text-sm text-accent tracking-wide shrink-0 w-16">
                   {item.year}
                 </span>
                 <div className="flex-1 border-l border-border pl-8">
                   <p className="font-display text-lg">{item.event}</p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Professional Background */}
       <section className="section-editorial">
         <div className="container mx-auto max-w-3xl text-center">
           <motion.h2
             className="font-display text-3xl md:text-4xl mb-12"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             Professional Journey
           </motion.h2>
           
           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             {[
               { role: 'Professor of Physics', place: 'G.G.M. Sc. College, Jammu', duration: '20 years' },
               { role: 'Technology Professional', place: 'IBM & Iomega', duration: '' },
               { role: 'Management', place: 'USPS', duration: '' },
             ].map((item) => (
               <div key={item.place} className="p-6 border border-border/50">
                 <h3 className="font-display text-lg mb-2">{item.role}</h3>
                 <p className="text-sm text-muted-foreground">{item.place}</p>
                 {item.duration && (
                   <p className="text-xs text-accent mt-2">{item.duration}</p>
                 )}
               </div>
             ))}
           </motion.div>
         </div>
       </section>
     </PageLayout>
   );
 };
 
 export default About;