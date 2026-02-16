'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Music, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

const audienceItems = [
  {
    icon: Music,
    audience: "If you're discovering Punjabi poetry",
    action: "Start with the Ghazal History page to understand the form, then listen to Tishnagi to experience it.",
    link: '/ghazal-history',
    linkText: 'Explore Ghazal History',
  },
  {
    icon: BookOpen,
    audience: "If you're a devoted reader",
    action: "Explore the complete bibliography and discover a voice worthy of Punjab's classical tradition—recognized by four major literary awards.",
    link: '/books',
    linkText: 'Browse the Books',
  },
  {
    icon: GraduationCap,
    audience: "If you're a scholar or academic",
    action: "The 2015 National Seminar in Jammu confirmed his significance. Minimal scholarship exists—opportunity to establish yourself as an authority.",
    link: '/contact',
    linkText: 'Research Inquiries',
  },
  {
    icon: Users,
    audience: "If you're a creative professional",
    action: "His ghazals have cinematic soul. The Tishnagi album demonstrates musical potential. Explore collaboration possibilities.",
    link: '/contact',
    linkText: 'Contact for Collaboration',
  },
];

export function AudienceSection() {
  const { shouldAnimate } = useMotionPreference();

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-burgundy">
      <div className="max-w-5xl mx-auto">
        <CinematicReveal className="text-center mb-16 md:mb-20">
          <span className="chapter-label block mb-4">Your Journey</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Who This Poetry Is <span className="text-gold italic">For</span>
          </h2>
        </CinematicReveal>
        
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {audienceItems.map((item) => (
            <motion.article
              key={item.audience}
              className="group relative p-8 md:p-10 border border-cream/10 hover:border-gold/30 transition-colors duration-500 focus-within:ring-2 focus-within:ring-gold"
              whileHover={shouldAnimate ? { y: -2 } : undefined}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-7 h-7 text-gold mb-5" aria-hidden="true" />
              
              <h3 className="font-display text-lg md:text-xl text-cream mb-3 leading-snug">
                {item.audience}
              </h3>
              
              <p className="text-cream/60 text-sm md:text-base leading-relaxed mb-5">
                {item.action}
              </p>
              
              {/* Divider above link */}
              <div className="w-8 h-px bg-gold/20 mb-4" aria-hidden="true" />
              
              <Link
                href={item.link} 
                className="text-gold font-ui text-xs tracking-wider flex items-center gap-1.5 hover:underline underline-offset-4 focus:outline-none focus-visible:underline"
              >
                {item.linkText} <ArrowRight size={12} />
              </Link>
            </motion.article>
          ))}
        </StaggerReveal>
        
        <DecorativeDivider variant="stamp" className="mt-20" />
      </div>
    </section>
  );
}
