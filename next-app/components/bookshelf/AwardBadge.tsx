import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AwardBadgeProps {
  award: string;
  className?: string;
}

export function AwardBadge({ award, className }: AwardBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2",
        "bg-gold/10 border border-gold/30",
        "text-gold font-ui text-sm",
        className
      )}
    >
      <Award size={16} className="shrink-0" />
      <span>{award}</span>
    </div>
  );
}
