// Static hero content - renders without JS for optimal LCP
// No 'use client' - this is a server component

export function HeroContent() {
  return (
    <section className="relative w-full bg-background overflow-hidden flex flex-col lg:min-h-screen">
      <div className="flex-1 flex items-center w-full pt-24 md:pt-28 lg:pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">

          {/* Left Column: Text Content - visible immediately */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6">
              The Physicist.<br />
              The Writer.<br />
              The <span className="text-gold italic">Poet</span>.
            </h1>

            {/* Decorative divider */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="w-12 h-px bg-gold/30" />
                <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
                <div className="w-12 h-px bg-gold/30" />
              </div>
            </div>

            {/* Award badge */}
            <div className="mb-3">
              <span className="inline-block px-5 py-2.5 bg-gold/5 border border-gold/20 text-gold font-ui text-[11px] tracking-[0.2em] uppercase">
                Award-Winning Punjabi Ghazals and Novel.
              </span>
            </div>

            {/* Sub-badge */}
            <div>
              <span className="font-ui text-xs tracking-[0.15em] text-cream/60 uppercase">
                Editor · Critic
              </span>
            </div>
          </div>

          {/* Right Column: Bookshelf placeholder - replaced by animated version on hydration */}
          <div className="flex items-center justify-center order-1 lg:order-2 lg:max-h-[60vh] min-h-[300px]">
            {/* Shimmer placeholder for bookshelf */}
            <div className="w-full h-[300px] md:h-[380px] bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse rounded" />
          </div>
        </div>
      </div>

      {/* Bottom subtitle */}
      <div className="relative pb-12 md:pb-16 lg:pb-20">
        <p className="font-body text-base md:text-lg text-cream/70 text-center max-w-[50ch] mx-auto px-6">
          Exploring consciousness, longing, and the immigrant experience through the ancient art of the ghazal.
        </p>
      </div>
    </section>
  );
}
