import { cn } from '@/lib/utils';

interface YearBadgeGoldProps {
  year: string;
  className?: string;
}

export function YearBadgeGold({ year, className }: YearBadgeGoldProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1",
        "font-ui text-xs tracking-widest",
        "bg-gold/20 text-gold border border-gold/40",
        "backdrop-blur-sm",
        className
      )}
    >
      {year}
    </span>
  );
}
