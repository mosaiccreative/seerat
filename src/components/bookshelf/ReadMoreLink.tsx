import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReadMoreLinkProps {
  to: string;
  className?: string;
}

export function ReadMoreLink({ to, className }: ReadMoreLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2",
        "font-ui text-sm tracking-wider",
        "text-gold/80 hover:text-gold",
        "transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      Read More
      <ArrowRight size={14} />
    </Link>
  );
}
