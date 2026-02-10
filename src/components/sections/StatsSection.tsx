import { StaggerReveal } from '@/components/animations/StaggerReveal';

const stats = [
  { value: '13', label: 'Published Books' },
  { value: '7', label: 'Major Awards' },
  { value: '45', label: 'Years of Poetry' },
  { value: '2', label: 'Orgs Founded' },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-14 px-6 md:px-12 bg-cream text-burgundy relative">
      {/* Top decorative divider */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2" 
        aria-hidden="true"
      >
        <div className="w-16 h-px bg-burgundy/10" />
        <div className="w-1.5 h-1.5 border border-burgundy/20 rotate-45" />
        <div className="w-16 h-px bg-burgundy/10" />
      </div>

      <div className="max-w-3xl mx-auto">
        <StaggerReveal 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center" 
          staggerDelay={0.1}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-burgundy mb-2 leading-none">
                {stat.value}
              </p>
              <p className="font-ui text-[11px] md:text-xs tracking-[0.15em] uppercase text-burgundy/60">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
      
      {/* Bottom decorative divider */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2" 
        aria-hidden="true"
      >
        <div className="w-16 h-px bg-burgundy/10" />
        <div className="w-1.5 h-1.5 border border-burgundy/20 rotate-45" />
        <div className="w-16 h-px bg-burgundy/10" />
      </div>
    </section>
  );
}
