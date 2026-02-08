import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type InquiryType = 'general' | 'collaboration' | 'academic' | 'library_acquisition';

const CONTACT_ENDPOINT = 'https://bnlequgydcvtkthfpgcj.supabase.co/functions/v1/contact';

const Contact = () => {
  const { shouldAnimate } = useMotionPreference();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      inquiryType: inquiryType,
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent",
          description: data.message || "Thank you for reaching out. We'll respond shortly.",
        });
        (e.target as HTMLFormElement).reset();
        setInquiryType('general');
      } else {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="bg-background border-border/50 focus:border-gold h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="subject" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border/50 focus:border-gold h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="inquiry-type" className="font-ui text-xs tracking-wider uppercase text-muted-foreground">
                  Inquiry Type
                </Label>
                <Select value={inquiryType} onValueChange={(value: InquiryType) => setInquiryType(value)} disabled={isSubmitting}>
                  <SelectTrigger id="inquiry-type" className="bg-background border-border/50 focus:border-gold h-12">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="library_acquisition">Library Acquisition</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                disabled={isSubmitting}
                className="bg-background border-border/50 focus:border-gold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight size={16} />
                </>
              )}
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