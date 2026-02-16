interface DecorativeDividerProps {
  variant?: 'line' | 'stamp' | 'rhythm';
  className?: string;
}

export function DecorativeDivider({ 
  variant = 'line', 
  className = '' 
}: DecorativeDividerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
      {variant === 'line' && (
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      )}
      
      {variant === 'stamp' && (
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gold/30" />
          <div className="w-2 h-2 border border-gold/50 rotate-45" />
          <div className="w-16 h-px bg-gold/30" />
        </div>
      )}
      
      {variant === 'rhythm' && (
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-gold/20" />
          <div className="w-1 h-1 rounded-full bg-gold/40" />
          <div className="w-12 h-px bg-gold/30" />
          <div className="w-1 h-1 rounded-full bg-gold/40" />
          <div className="w-8 h-px bg-gold/20" />
        </div>
      )}
    </div>
  );
}
