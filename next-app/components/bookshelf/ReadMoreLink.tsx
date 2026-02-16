import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReadMoreLinkProps {
  href: string;
  className?: string;
}

export function ReadMoreLink({ href, className }: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
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
