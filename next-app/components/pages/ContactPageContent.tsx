'use client';

import { useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
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

export function ContactPageContent() {
  const { shouldAnimate } = useMotionPreference();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');

  const MAX_NAME_LENGTH = 100;
  const MAX_EMAIL_LENGTH = 255;
  const MAX_SUBJECT_LENGTH = 200;
  const MAX_MESSAGE_LENGTH = 5000;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const VALID_INQUIRY_TYPES: InquiryType[] = ['general', 'collaboration', 'academic', 'library_acquisition'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const subject = (formData.get('subject') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    if (!name || name.length > MAX_NAME_LENGTH) {
      toast({ title: "Invalid name", description: `Name must be between 1 and ${MAX_NAME_LENGTH} characters.`, variant: "destructive" });
      return;
    }
    if (!email || !emailRegex.test(email) || email.length > MAX_EMAIL_LENGTH) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (!subject || subject.length > MAX_SUBJECT_LENGTH) {
      toast({ title: "Invalid subject", description: `Subject must be between 1 and ${MAX_SUBJECT_LENGTH} characters.`, variant: "destructive" });
      return;
    }
    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      toast({ title: "Invalid message", description: `Message must be between 1 and ${MAX_MESSAGE_LENGTH} characters.`, variant: "destructive" });
      return;
    }
    if (!VALID_INQUIRY_TYPES.includes(inquiryType)) {
      toast({ title: "Invalid inquiry type", description: "Please select a valid inquiry type.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const payload = { name, email, subject, message, inquiryType };

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
      {/* Light theme wrapper for entire page */}
      <div className="bg-[#f7f3eb] min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-t-[3px] border-[#d4a84b]">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="font-ui text-xs tracking-[0.3em] uppercase text-[#d4a84b] block mb-6">Arz Kiya Hai</span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 text-[#1a1815]">
                Get in <span className="text-[#d4a84b] italic">Touch</span>
              </h1>
              <p className="text-[#4a453f] text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
                For inquiries about events, readings, book purchases, or literary collaborations.
              </p>
            </m.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#faf8f4]">
          <div className="max-w-xl mx-auto">
            <m.form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-8 md:p-12 border border-[#e8e3d8] shadow-sm"
              initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="font-ui text-xs tracking-wider uppercase text-[#4a453f]">
                    Name <span className="text-[#d4a84b]">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    disabled={isSubmitting}
                    maxLength={MAX_NAME_LENGTH}
                    className="bg-[#faf8f4] border-[#e8e3d8] text-[#1a1815] placeholder:text-[#4a453f]/60 h-12 focus:bg-white focus:border-[#d4a84b] focus:ring-[#d4a84b]/20 transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="font-ui text-xs tracking-wider uppercase text-[#4a453f]">
                    Email <span className="text-[#d4a84b]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    disabled={isSubmitting}
                    maxLength={MAX_EMAIL_LENGTH}
                    className="bg-[#faf8f4] border-[#e8e3d8] text-[#1a1815] placeholder:text-[#4a453f]/60 h-12 focus:bg-white focus:border-[#d4a84b] focus:ring-[#d4a84b]/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="subject" className="font-ui text-xs tracking-wider uppercase text-[#4a453f]">
                    Subject <span className="text-[#d4a84b]">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    disabled={isSubmitting}
                    maxLength={MAX_SUBJECT_LENGTH}
                    className="bg-[#faf8f4] border-[#e8e3d8] text-[#1a1815] placeholder:text-[#4a453f]/60 h-12 focus:bg-white focus:border-[#d4a84b] focus:ring-[#d4a84b]/20 transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="inquiry-type" className="font-ui text-xs tracking-wider uppercase text-[#4a453f]">
                    Inquiry Type
                  </Label>
                  <Select value={inquiryType} onValueChange={(value: InquiryType) => setInquiryType(value)} disabled={isSubmitting}>
                    <SelectTrigger id="inquiry-type" className="bg-[#faf8f4] border-[#e8e3d8] text-[#1a1815] h-12 focus:bg-white focus:border-[#d4a84b] focus:ring-[#d4a84b]/20 transition-colors">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#e8e3d8]">
                      <SelectItem value="general" className="text-[#1a1815] focus:bg-[#f0ead4]">General Inquiry</SelectItem>
                      <SelectItem value="collaboration" className="text-[#1a1815] focus:bg-[#f0ead4]">Collaboration</SelectItem>
                      <SelectItem value="academic" className="text-[#1a1815] focus:bg-[#f0ead4]">Academic</SelectItem>
                      <SelectItem value="library_acquisition" className="text-[#1a1815] focus:bg-[#f0ead4]">Library Acquisition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="font-ui text-xs tracking-wider uppercase text-[#4a453f]">
                  Message <span className="text-[#d4a84b]">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="bg-[#faf8f4] border-[#e8e3d8] text-[#1a1815] placeholder:text-[#4a453f]/60 focus:bg-white focus:border-[#d4a84b] focus:ring-[#d4a84b]/20 resize-none transition-colors"
                />
              </div>

              <p className="text-xs text-[#4a453f]/80 text-center mb-4">
                By submitting, you agree to our{' '}
                <Link href="/policies" className="text-[#d4a84b] hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/policies?tab=terms" className="text-[#d4a84b] hover:underline">
                  Terms of Service
                </Link>
                .
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#d4a84b] text-[#1a1815] font-display text-lg tracking-wide hover:bg-[#c89637] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </m.form>

            {/* Alternative Contact */}
            <m.div
              className="mt-16 pt-12 border-t border-[#d4a84b]/30 text-center"
              initial={shouldAnimate ? { opacity: 0 } : undefined}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#4a453f] text-sm mb-6 font-body">Or reach out directly</p>
              <a
                href="mailto:arz@surinderseerat.com"
                className="inline-flex items-center gap-3 text-[#d4a84b] hover:text-[#1a1815] transition-colors duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-ui text-sm tracking-wider">arz@surinderseerat.com</span>
              </a>
            </m.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
