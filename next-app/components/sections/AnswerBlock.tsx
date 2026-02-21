 import { m } from 'framer-motion';
 import { useMotionPreference } from '@/hooks/useMotionPreference';
 import { ExternalLink } from 'lucide-react';
 
interface AnswerBlockProps {
  id: string;
  question: string;
  answer: string;
  sourceLabel?: string;
  sourceUrl?: string;
  className?: string;
  lightTheme?: boolean;
}

export function AnswerBlock({
  id,
  question,
  answer,
  sourceLabel,
  sourceUrl,
  className = '',
  lightTheme = false
}: AnswerBlockProps) {
  const { shouldAnimate } = useMotionPreference();

  return (
    <m.article
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      itemScope
      itemType="https://schema.org/Question"
    >
      <h3 
        className={`font-display text-xl md:text-2xl mb-4 ${lightTheme ? 'text-[#d4a84b]' : 'text-gold'}`}
        itemProp="name"
      >
        {question}
      </h3>
      
      <div 
        itemScope 
        itemType="https://schema.org/Answer" 
        itemProp="acceptedAnswer"
      >
        <p 
          className={`leading-relaxed text-lg ${lightTheme ? 'text-[#4a453f]' : 'text-foreground/90'}`}
          itemProp="text"
        >
          {answer}
        </p>
      </div>
      
      {sourceLabel && sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 mt-4 font-ui text-xs tracking-wide transition-colors ${
            lightTheme 
              ? 'text-[#4a453f] hover:text-[#d4a84b]' 
              : 'text-muted-foreground hover:text-gold'
          }`}
        >
          <span>Source: {sourceLabel}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </m.article>
  );
}