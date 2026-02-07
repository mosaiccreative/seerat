import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { shouldAnimate } = useMotionPreference();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll respond shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="page-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="chapter-label block">Arz Kiya Hai</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8">
              Get in <span className="text-gold italic">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              For inquiries about events, readings, book purchases, or literary collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-background border-border/50 focus:border-gold h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border-border/50 focus:border-gold h-12"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="subject" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                required
                className="bg-background border-border/50 focus:border-gold h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                className="bg-background border-border/50 focus:border-gold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <ArrowRight size={16} />
            </button>
          </motion.form>

          {/* Alternative */}
          <motion.div
            className="mt-20 pt-12 border-t border-border/30 text-center"
            initial={shouldAnimate ? { opacity: 0 } : undefined}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm mb-6">Or reach out directly</p>
            <a
              href="mailto:arz@surinderseerat.com"
              className="inline-flex items-center gap-3 text-gold hover:text-foreground transition-colors duration-300"
            >
              <Mail size={18} />
              <span className="font-ui text-sm tracking-wider">arz@surinderseerat.com</span>
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;