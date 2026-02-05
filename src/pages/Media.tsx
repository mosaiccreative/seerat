 import { motion } from 'framer-motion';
 import { PageLayout } from '@/components/layout/PageLayout';
 import { SectionHeading } from '@/components/sections/SectionHeading';
 import { MediaItem } from '@/components/sections/MediaItem';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { getVerifiedPress } from '@/data/media';
 
 const Media = () => {
   const { shouldAnimate } = useMotionPreference();
   const pressItems = getVerifiedPress();
 
   return (
     <PageLayout>
       {/* Hero Section */}
       <section className="pt-32 pb-20 px-6">
         <div className="container mx-auto max-w-4xl">
           <motion.div
             className="text-center"
             initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="font-ui text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
               Press & Appearances
             </span>
             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
               Media
             </h1>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Coverage, interviews, and features from publications across India and beyond.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Press Mentions */}
       <section className="section-editorial bg-paper-warm">
         <div className="container mx-auto max-w-4xl">
           <SectionHeading
             label="Editorial Coverage"
             title="Press & Mentions"
           />
 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {pressItems.map((item, index) => (
               <MediaItem
                 key={item.id}
                 outlet={item.outlet}
                 title={item.title}
                 url={item.url}
                 date={item.date}
                 index={index}
               />
             ))}
           </div>
         </div>
       </section>
 
       {/* Recordings & Appearances */}
       <section className="section-editorial">
         <div className="container mx-auto max-w-4xl">
           <SectionHeading
             label="Listen & Watch"
             title="Recordings & Appearances"
             description="Audio recordings and video appearances featuring poetry readings and discussions."
           />
 
           <motion.div
             className="grid grid-cols-1 md:grid-cols-2 gap-8"
             initial={shouldAnimate ? { opacity: 0 } : undefined}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             {/* YouTube Card */}
             <a
               href="https://www.youtube.com/@SurinderSeerat"
               target="_blank"
               rel="noopener noreferrer"
               className="group block p-8 bg-card border border-border/50 hover:border-border transition-all"
             >
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                   <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-display text-xl group-hover:text-accent transition-colors">
                     YouTube Channel
                   </h3>
                   <p className="text-sm text-muted-foreground">Video recordings</p>
                 </div>
               </div>
               <p className="text-muted-foreground text-sm">
                 Watch poetry readings, interviews, and literary event coverage.
               </p>
             </a>
 
             {/* SoundCloud Card */}
             <a
               href="https://soundcloud.com/surinder-seerat"
               target="_blank"
               rel="noopener noreferrer"
               className="group block p-8 bg-card border border-border/50 hover:border-border transition-all"
             >
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                   <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.01-.057-.049-.1-.099-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.283c.013.06.045.094.104.094.057 0 .094-.034.104-.094l.199-1.283-.2-1.332c-.009-.06-.047-.094-.104-.094zm1.79-1.188c-.066 0-.109.053-.114.108l-.196 2.563.196 2.435c.005.055.048.104.114.104.06 0 .105-.049.114-.104l.225-2.435-.225-2.563c-.009-.055-.054-.108-.114-.108zm.893-.449c-.073 0-.121.055-.126.116l-.17 3.012.17 2.699c.005.061.053.113.126.113.07 0 .12-.052.126-.113l.195-2.699-.195-3.012c-.006-.061-.056-.116-.126-.116zm.892-.139c-.08 0-.133.063-.139.127l-.148 3.151.148 2.759c.006.063.059.117.139.117.076 0 .129-.054.138-.117l.17-2.759-.17-3.151c-.009-.064-.062-.127-.138-.127zm.897-.084c-.082 0-.143.065-.147.132l-.127 3.235.127 2.799c.004.067.065.124.147.124.08 0 .139-.057.147-.124l.143-2.799-.143-3.235c-.008-.067-.067-.132-.147-.132zm1.79-.24c-.089 0-.153.069-.156.143l-.101 3.475.101 2.819c.003.07.067.131.156.131.086 0 .15-.061.156-.131l.115-2.819-.115-3.475c-.006-.074-.07-.143-.156-.143zm.892.016c-.094 0-.163.074-.166.151l-.076 3.459.076 2.826c.003.077.072.139.166.139.091 0 .161-.062.166-.139l.087-2.826-.087-3.459c-.005-.077-.075-.151-.166-.151zm.978-.193c-.1 0-.175.078-.179.159l-.058 3.651.058 2.838c.004.078.079.143.179.143.097 0 .172-.065.179-.143l.065-2.838-.065-3.651c-.007-.081-.082-.159-.179-.159zm.881.111c-.109 0-.186.086-.189.17l-.033 3.54.033 2.851c.003.083.08.152.189.152.104 0 .182-.069.189-.152l.037-2.851-.037-3.54c-.007-.084-.085-.17-.189-.17zm1.893-.396c-.105 0-.189.083-.193.171l-.007 3.936.007 2.858c.004.088.088.159.193.159.101 0 .183-.071.193-.159l.007-2.858-.007-3.936c-.01-.088-.092-.171-.193-.171zm.884-.028c-.111 0-.197.088-.201.178l-.001 3.964.001 2.863c.004.09.09.162.201.162.107 0 .193-.072.201-.162l.001-2.863-.001-3.964c-.008-.09-.094-.178-.201-.178zm7.039 1.836c-.291 0-.57.047-.833.133-.155-1.808-1.693-3.226-3.569-3.226-.479 0-.935.096-1.355.26-.161.064-.203.127-.206.253v6.356c.003.134.098.244.223.261 1.877.001 5.749.001 5.74.001 1.278-.001 2.315-1.032 2.315-2.305 0-1.274-1.037-2.305-2.315-2.305z"/>
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-display text-xl group-hover:text-accent transition-colors">
                     SoundCloud
                   </h3>
                   <p className="text-sm text-muted-foreground">Audio recordings</p>
                 </div>
               </div>
               <p className="text-muted-foreground text-sm">
                 Listen to ghazal recitations and poetry audio recordings.
               </p>
             </a>
           </motion.div>
         </div>
       </section>
     </PageLayout>
   );
 };
 
 export default Media;