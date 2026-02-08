import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { Loader2, Mail, CheckCircle, User } from 'lucide-react';

type EmailCaptureVariant = 'homepage' | 'tishnagi' | 'books' | 'ghazal' | 'default' | 'minimal';
type EndpointType = 'newsletter' | 'course-waitlist' | 'store-waitlist';

interface EmailCaptureProps {
  variant?: EmailCaptureVariant;
  endpoint?: EndpointType;
  source?: string;
  headline?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  showFirstName?: boolean;
}

const variantContent: Record<EmailCaptureVariant, { headline: string; description: string; buttonText: string }> = {
  homepage: {
    headline: "Join the Mehfil",
    description: "Receive new ghazals, poetry insights, and stories from Surinder's literary journey—straight to your inbox. Get exclusive access to unreleased recordings, behind-the-scenes stories, and event invitations.",
    buttonText: "Subscribe",
  },
  tishnagi: {
    headline: "Love What You Hear?",
    description: "Get notified when new ghazal recordings are released. Plus exclusive stories about the music-making process.",
    buttonText: "Keep Me Posted",
  },
  books: {
    headline: "Be First to Know",
    description: "Get notified when books become available for purchase. Plus receive exclusive excerpts and poetry analysis.",
    buttonText: "Stay Connected",
  },
  ghazal: {
    headline: "Want to Learn More?",
    description: "Dive deeper into ghazal traditions, Punjabi poetry history, and how classic form meets modern themes.",
    buttonText: "Send Me Insights",
  },
  default: {
    headline: "Stay Updated",
    description: "Join our newsletter for the latest updates.",
    buttonText: "Subscribe",
  },
  minimal: {
    headline: "",
    description: "",
    buttonText: "Subscribe",
  },
};

const ENDPOINTS: Record<EndpointType, string> = {
  'newsletter': 'https://bnlequgydcvtkthfpgcj.supabase.co/functions/v1/subscribe',
  'course-waitlist': 'https://bnlequgydcvtkthfpgcj.supabase.co/functions/v1/course-waitlist',
  'store-waitlist': 'https://bnlequgydcvtkthfpgcj.supabase.co/functions/v1/store-waitlist',
};

export function EmailCapture({
  variant = 'default',
  endpoint = 'newsletter',
  source,
  headline,
  description,
  buttonText,
  className = '',
  showFirstName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();
  const { shouldAnimate } = useMotionPreference();

  const content = variantContent[variant];
  const displayHeadline = headline ?? content.headline;
  const displayDescription = description ?? content.description;
  const displayButtonText = buttonText ?? content.buttonText;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Build payload based on endpoint type
      const payload: Record<string, string> = { email };
      
      if (firstName.trim()) {
        payload.firstName = firstName.trim();
      }
      
      // Add source for newsletter endpoint
      if (endpoint === 'newsletter' && source) {
        payload.source = source;
      }

      const response = await fetch(ENDPOINTS[endpoint], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setSuccessMessage(data.message || 'You have been added to our list!');
        setEmail('');
        setFirstName('');
        
        toast({
          title: "Success!",
          description: data.message || 'You have been added to our list!',
        });
      } else {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        className={`text-center ${className}`}
        initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
        <p className="font-display text-2xl mb-2">Welcome!</p>
        <p className="text-muted-foreground">{successMessage}</p>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {variant !== 'minimal' && displayHeadline && (
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl md:text-3xl mb-4">{displayHeadline}</h3>
          {displayDescription && (
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">{displayDescription}</p>
          )}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
        <div className="flex flex-col gap-4">
          {showFirstName && (
            <div>
              <Label htmlFor="first-name-capture" className="sr-only">
                First name (optional)
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="first-name-capture"
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isLoading}
                  className="pl-11 py-6 bg-secondary border-2 text-base placeholder:text-muted-foreground/60 focus:border-gold focus:ring-gold focus-visible:ring-gold border-border"
                />
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="email-capture" className="sr-only">
                Email address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="email-capture"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  disabled={isLoading}
                  className={`pl-11 py-6 bg-secondary border-2 text-base placeholder:text-muted-foreground/60 focus:border-gold focus:ring-gold focus-visible:ring-gold ${
                    error ? 'border-destructive' : 'border-border'
                  }`}
                  aria-describedby="email-hint email-error"
                  aria-invalid={!!error}
                />
              </div>
              {error && (
                <p id="email-error" className="text-destructive text-sm mt-2" role="alert">
                  {error}
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-gold text-ink hover:bg-gold/90 font-ui tracking-wide py-6 px-8 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Joining...</span>
                </>
              ) : (
                displayButtonText
              )}
            </Button>
          </div>
        </div>
        <p id="email-hint" className="text-xs text-muted-foreground/70 mt-4 text-center">
          Monthly updates. Unsubscribe anytime. We respect your privacy.
        </p>
      </form>
    </div>
  );
}
