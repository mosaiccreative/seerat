import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

export function RareCombinationSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 bg-cream text-burgundy">
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
        
        {/* Body text with improved readability */}
        <div className="prose-poetry text-burgundy/80 space-y-6 max-w-[65ch] mx-auto text-base md:text-lg leading-[1.8]">
          <p>
            His ghazals maintain the <strong className="text-burgundy font-medium">technical purity</strong> that won him 
            three consecutive awards from the Jammu & Kashmir Academy of Art, Culture & Languages (1982, 1987, 1991). 
            Yet his work explores <strong className="text-burgundy font-medium">contemporary questions</strong>: consciousness 
            and language, the immigrant experience, the limits of rational thought.
          </p>
        </div>
        
        <DecorativeDivider variant="rhythm" className="my-12" />
        
        {/* Three pillars */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-display text-base md:text-lg text-center">
          <span><strong className="text-gold">Physics</strong> meets mysticism.</span>
          <span className="hidden md:inline text-gold/50">•</span>
          <span><strong className="text-gold">Kashmir</strong> meets California.</span>
          <span className="hidden md:inline text-gold/50">•</span>
          <span><strong className="text-gold">Tradition</strong> meets the modern soul.</span>
        </div>
        
        <DecorativeDivider variant="line" className="my-12" />
        
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
