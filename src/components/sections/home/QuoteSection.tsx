import { CinematicReveal } from '@/components/animations/CinematicReveal';

export function QuoteSection() {
  return (
    <section className="py-32 md:py-40 px-6 text-center bg-burgundy border-t border-cream/10">
      <CinematicReveal className="max-w-3xl mx-auto">
        {/* Opening quote mark */}
        <div className="text-gold/30 font-display text-6xl md:text-8xl leading-none mb-6" aria-hidden="true">
          "
        </div>
        
        <blockquote>
          <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-cream/90 leading-relaxed max-w-[45ch] mx-auto">
            The mysteriousness of existence cannot be fully captured in language—but the attempt reveals truths rationality alone cannot access.
          </p>
        </blockquote>
        
        {/* Calligraphic rhythm divider */}
        <div className="flex items-center justify-center gap-2 my-8" aria-hidden="true">
          <div className="w-8 h-px bg-gold/30" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="w-8 h-px bg-gold/30" />
        </div>
        
        <cite className="text-gold font-ui text-sm tracking-[0.15em] uppercase not-italic">
          — Surinder Singh Seerat
        </cite>
      </CinematicReveal>
    </section>
  );
}
