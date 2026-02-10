import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { StaggerReveal } from '@/components/animations/StaggerReveal';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

const pillars = [
  { keyword: 'Physics', connector: 'meets', complement: 'mysticism' },
  { keyword: 'Kashmir', connector: 'meets', complement: 'California' },
  { keyword: 'Tradition', connector: 'meets', complement: 'the modern soul' },
];

export function RareCombinationSection() {
  return (
    <section className="py-14 md:py-20 lg:py-24 px-6 md:px-12 bg-cream text-burgundy">
      {/* Margin ornament - thin vertical line with stamp */}
      <div className="hidden lg:block fixed left-8 top-1/3 h-32" aria-hidden="true">
        <div className="w-px h-full bg-burgundy/10" />
        <div className="w-3 h-3 border border-burgundy/20 rotate-45 -ml-[5px] mt-2" />
      </div>

      <CinematicReveal className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="chapter-label block mb-4">A Rare Combination</span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight max-w-[25ch] mx-auto">
            Most poets choose either{' '}
            <span className="text-gold italic">tradition</span> or{' '}
            <span className="text-gold italic">modernity</span>.
          </h2>
          
          <p className="text-xl md:text-2xl text-burgundy font-display">
            Seerat masters both.
          </p>
        </div>
        
        {/* Body text with pull-quote styling */}
        <div className="border-l-2 border-gold/40 pl-6 py-6 bg-burgundy/[0.02] rounded-r-sm">
          <div className="prose-poetry text-burgundy/80 space-y-6 max-w-[65ch] mx-auto text-base md:text-lg leading-[1.8]">
            <p>
              His ghazals maintain the <strong className="text-burgundy font-medium">technical purity</strong> that won him 
              three consecutive awards from the Jammu & Kashmir Academy of Art, Culture & Languages (1982, 1987, 1991). 
              Yet his work explores <strong className="text-burgundy font-medium">contemporary questions</strong>: consciousness 
              and language, the immigrant experience, the limits of rational thought.
            </p>
          </div>
        </div>
        
        <DecorativeDivider variant="rhythm" className="my-16" />
        
        {/* Three pillars as elevated cards */}
        <StaggerReveal 
          className="grid grid-cols-1 md:grid-cols-3 gap-6" 
          staggerDelay={0.15}
        >
          {pillars.map((pillar) => (
            <div 
              key={pillar.keyword}
              className="group relative p-8 border border-burgundy/10 bg-cream/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/30"
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold" />
              
              {/* Decorative diamond */}
              <div className="w-2 h-2 border border-gold/60 rotate-45 mx-auto mb-4" aria-hidden="true" />
              
              {/* Keyword */}
              <span className="block text-gold font-display text-xl md:text-2xl font-medium">
                {pillar.keyword}
              </span>
              
              {/* Connector */}
              <span className="block text-burgundy/50 text-sm font-ui uppercase tracking-widest my-2">
                {pillar.connector}
              </span>
              
              {/* Complement */}
              <span className="block text-burgundy font-display text-lg md:text-xl">
                {pillar.complement}
              </span>
            </div>
          ))}
        </StaggerReveal>
        
        <DecorativeDivider variant="line" className="my-16" />
        
        {/* Extended bio */}
        <div className="prose-poetry text-burgundy/80 space-y-6 max-w-[65ch] mx-auto text-base md:text-lg leading-[1.8]">
          <p>
            Born in a small village in Kashmir, Surinder Singh Seerat was the{' '}
            <strong className="text-burgundy font-medium">first person in his family—and his entire village—to graduate from university</strong>. 
            He built a career as a physics professor, taught for over twenty years, and worked in corporate America 
            at IBM, Iomega, and the U.S. Postal Service.
          </p>
          <p>
            But poetry called louder than any profession. In 2011, he took sabbatical to pursue what he'd been 
            doing quietly for decades: writing ghazals that explore the mysteries of human existence.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/about" 
            className="text-gold font-ui text-sm tracking-wider inline-flex items-center gap-2 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          >
            Read the full story <ArrowRight size={14} />
          </Link>
        </div>
      </CinematicReveal>
    </section>
  );
}
