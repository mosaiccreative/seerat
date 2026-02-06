import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import poetPortrait from '@/assets/poet-portrait.jpg';

export function PoetSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-cream text-burgundy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
        {/* Text content */}
        <CinematicReveal 
          className="order-2 lg:order-1" 
          direction="left"
        >
          <span className="chapter-label block mb-4">The Poet</span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            A Voice Worth
            <br />
            <span className="text-gold italic">Discovering</span>
          </h2>
          
          <div className="prose-poetry text-burgundy/80 space-y-5 text-base md:text-lg leading-[1.8] max-w-[55ch]">
            <p>
              In a world hungry for authentic poetry, Surinder Singh Seerat offers something rare:
            </p>
            <ul className="space-y-3 text-burgundy list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-3 flex-shrink-0" aria-hidden="true" />
                <span><strong className="font-medium">Technical mastery</strong> without academic sterility.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-3 flex-shrink-0" aria-hidden="true" />
                <span><strong className="font-medium">Philosophical depth</strong> without abstraction.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-3 flex-shrink-0" aria-hidden="true" />
                <span><strong className="font-medium">Tradition</strong> meeting modernity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-3 flex-shrink-0" aria-hidden="true" />
                <span><strong className="font-medium">The immigrant experience</strong> expressed through a form older than nations.</span>
              </li>
            </ul>
          </div>
          
          <Link 
            to="/about" 
            className="btn-gold mt-10 inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Read Full Biography
            <ArrowRight size={16} />
          </Link>
        </CinematicReveal>
        
        {/* Portrait */}
        <CinematicReveal 
          className="order-1 lg:order-2 relative" 
          direction="right"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Gold frame accents */}
            <div className="absolute -inset-4 border border-gold/20" aria-hidden="true" />
            <div className="absolute -inset-8 border border-gold/10" aria-hidden="true" />
            
            <img
              src={poetPortrait}
              alt="Surinder Seerat"
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Film grain overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent mix-blend-multiply pointer-events-none" 
              aria-hidden="true" 
            />
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
}
