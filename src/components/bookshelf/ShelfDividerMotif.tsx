import { cn } from '@/lib/utils';

interface ShelfDividerMotifProps {
  className?: string;
}

export function ShelfDividerMotif({ className }: ShelfDividerMotifProps) {
  return (
    <div 
      className={cn("w-full flex items-center justify-center py-4", className)}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        {/* Left line */}
        <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/50" />
        
        {/* Center motif - Punjabi-inspired diamond */}
        <div className="relative">
          <div className="w-2 h-2 rotate-45 border border-gold/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 rotate-45 bg-gold/40" />
          </div>
        </div>
        
        {/* Right line */}
        <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-gold/30 to-gold/50" />
      </div>
    </div>
  );
}
