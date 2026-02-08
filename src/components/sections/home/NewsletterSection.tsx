import { CinematicReveal } from '@/components/animations/CinematicReveal';
import { EmailCapture } from '@/components/sections/EmailCapture';
import { Link } from 'react-router-dom';

export function NewsletterSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-burgundy-dark">
      <CinematicReveal className="max-w-2xl mx-auto">
        <EmailCapture variant="homepage" endpoint="newsletter" source="homepage" />
        
        {/* Privacy micro-link */}
        <div className="text-center mt-6">
          <Link 
            to="/policies" 
            className="text-cream/40 hover:text-cream/60 font-ui text-xs tracking-wider transition-colors focus:outline-none focus-visible:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </CinematicReveal>
    </section>
  );
}
