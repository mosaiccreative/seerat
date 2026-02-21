'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { m } from 'framer-motion';
import { PageLayout } from '@/components/layout/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export function PoliciesPageContent() {
  const { shouldAnimate } = useMotionPreference();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'privacy');

  useEffect(() => {
    if (tabParam && ['privacy', 'terms', 'refund', 'cookies'].includes(tabParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync state with URL param
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const lastUpdated = 'February 9, 2026';

  return (
    <PageLayout>
      <section className="page-section">
        <m.div
          className="max-w-3xl mx-auto"
          initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4 text-center">
            <span className="text-gold">Legal</span> Policies
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: {lastUpdated}
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 bg-secondary">
              <TabsTrigger
                value="privacy"
                className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
              >
                Privacy
              </TabsTrigger>
              <TabsTrigger
                value="terms"
                className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
              >
                Terms
              </TabsTrigger>
              <TabsTrigger
                value="refund"
                className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
              >
                Refunds
              </TabsTrigger>
              <TabsTrigger
                value="cookies"
                className="font-ui text-xs tracking-wide data-[state=active]:bg-gold data-[state=active]:text-ink"
              >
                Cookies
              </TabsTrigger>
            </TabsList>

            {/* PRIVACY POLICY */}
            <TabsContent value="privacy" className="prose-poetry">
              <h2 className="font-display text-2xl mb-6">Privacy Policy</h2>
              <div className="text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Your privacy matters to us. This Privacy Policy explains how Surinder Singh Seerat
                  (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when
                  you visit surinderseerat.com (the &quot;Website&quot;) and use our services.
                </p>
                <p>
                  We are committed to protecting your privacy and handling your data with transparency
                  and care. This policy is written in plain language so you can understand exactly what
                  happens with your information.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">1. Information We Collect</h3>
                <p><strong className="text-foreground">Information You Provide Directly:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Form:</strong> Name, email address, subject, message content, and inquiry type when you contact us</li>
                  <li><strong>Newsletter Signup:</strong> Email address and optional first name when you subscribe to our mailing list</li>
                  <li><strong>Course Waitlist:</strong> Email address and optional first name when you join our poetry course waitlist</li>
                  <li><strong>Store Waitlist:</strong> Email address and optional first name when you sign up for bookshop notifications</li>
                </ul>

                <p className="mt-4"><strong className="text-foreground">Information Collected Automatically:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Device type (desktop, mobile, tablet)</li>
                  <li>General geographic location (country/region level only)</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">2. How We Use Your Information</h3>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Inquiries:</strong> To respond to your messages and questions</li>
                  <li><strong>Newsletter:</strong> To send you poetry updates, new releases, literary insights, and announcements about Surinder Seerat&apos;s work</li>
                  <li><strong>Waitlists:</strong> To notify you when courses launch or when the bookshop opens</li>
                  <li><strong>Website Improvement:</strong> To understand how visitors use our site and improve user experience</li>
                  <li><strong>Communication:</strong> To send important updates about our services</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">We do not sell, rent, or share your personal information with third parties for marketing purposes.</strong>
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">3. Third-Party Services</h3>
                <p>We use trusted third-party services to operate our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Supabase:</strong> Securely stores form submissions and subscriber data with encryption at rest</li>
                  <li><strong>Resend:</strong> Sends transactional and newsletter emails on our behalf</li>
                  <li><strong>Netlify:</strong> Hosts our website with industry-standard security</li>
                </ul>
                <p className="mt-4">
                  These services process data only as necessary to provide their services and are bound
                  by their own privacy policies and data protection obligations.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">4. Data Security</h3>
                <p>We take data security seriously:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All data is transmitted over HTTPS (SSL/TLS encryption)</li>
                  <li>Database records are encrypted at rest</li>
                  <li>We use secure, reputable third-party services</li>
                  <li>Access to personal data is limited to authorized personnel only</li>
                </ul>
                <p className="mt-4">
                  While we implement industry-standard security measures, no method of transmission
                  over the internet is 100% secure. We cannot guarantee absolute security.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">5. Your Rights</h3>
                <p>You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Unsubscribe:</strong> Opt out of marketing emails at any time via the unsubscribe link in every email</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>. We will respond within 30 days.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">6. Data Retention</h3>
                <p>
                  We retain your personal data only as long as necessary for the purposes described
                  in this policy. Contact form submissions are retained for up to 2 years. Newsletter
                  subscriber information is retained until you unsubscribe. You may request deletion
                  of your data at any time.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">7. Children&apos;s Privacy</h3>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly
                  collect personal information from children under 13. If you believe we have collected
                  information from a child under 13, please contact us immediately.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">8. International Users</h3>
                <p>
                  If you are accessing our website from outside the United States, please be aware
                  that your information may be transferred to, stored, and processed in the United States
                  where our servers are located. By using our website, you consent to this transfer.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">9. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  material changes by posting the new policy on this page and updating the &quot;Last Updated&quot;
                  date. Your continued use of the website after changes constitutes acceptance of the
                  updated policy.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">10. Contact Us</h3>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>
                </p>
              </div>
            </TabsContent>

            {/* TERMS OF SERVICE */}
            <TabsContent value="terms" className="prose-poetry">
              <h2 className="font-display text-2xl mb-6">Terms of Service</h2>
              <div className="text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Welcome to surinderseerat.com. By accessing or using this website, you agree to be
                  bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
                  please do not use this website.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">1. Acceptance of Terms</h3>
                <p>
                  By accessing this website, you confirm that you are at least 13 years of age and
                  have the legal capacity to enter into these Terms. We reserve the right to modify
                  these Terms at any time. Continued use of the website after changes constitutes
                  acceptance of the modified Terms.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">2. Intellectual Property Rights</h3>
                <p>
                  <strong className="text-foreground">All content on this website is protected by copyright and intellectual property laws.</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All poetry, ghazals, prose, essays, and literary works are the exclusive property of Surinder Singh Seerat</li>
                  <li>Website design, graphics, logos, and visual elements are protected intellectual property</li>
                  <li>Audio recordings, including the Tishnagi album, are copyrighted works</li>
                  <li>Book covers, photographs, and artwork are protected by copyright</li>
                </ul>
                <p className="mt-4 p-4 bg-secondary/50 border-l-2 border-gold">
                  <strong className="text-foreground">Copyright Notice:</strong> © Surinder Singh Seerat. All rights reserved.
                  Unauthorized reproduction, distribution, or use of any content from this website
                  is strictly prohibited without prior written permission.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">3. Permitted Use</h3>
                <p>You are granted a limited, non-exclusive, non-transferable license to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View and read content for personal, non-commercial purposes</li>
                  <li>Share links to our website and content</li>
                  <li>Quote brief excerpts (with proper attribution) for educational or review purposes under fair use</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">4. Prohibited Activities</h3>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, reproduce, or republish poetry, essays, or other literary content without written permission</li>
                  <li>Use content for commercial purposes without authorization</li>
                  <li>Create derivative works based on our content</li>
                  <li>Remove or alter copyright notices or attributions</li>
                  <li>Use automated systems (bots, scrapers) to access or collect content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Upload malicious code or interfere with website functionality</li>
                  <li>Harass, threaten, or abuse other users or staff</li>
                  <li>Use the website for any unlawful purpose</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">5. User Submissions</h3>
                <p>
                  When you submit information through our contact form, newsletter signup, or other forms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to provide accurate and truthful information</li>
                  <li>You consent to receiving communications as described in our Privacy Policy</li>
                  <li>You understand that we may retain and use your submissions as described</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">6. Courses and Digital Products</h3>
                <p>If you purchase or enroll in courses or digital products:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Course content is for educational purposes and personal development only</li>
                  <li>Course materials may not be redistributed or shared with non-enrolled individuals</li>
                  <li>Results and outcomes are not guaranteed; individual experiences may vary</li>
                  <li>Refund policies apply as described in our Refund Policy</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">7. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites (YouTube, SoundCloud, social media).
                  We are not responsible for the content, privacy practices, or terms of service of
                  third-party sites. We encourage you to review their policies before using their services.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">8. Disclaimer of Warranties</h3>
                <p>
                  This website is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                  either express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Accuracy, completeness, or reliability of content</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Freedom from viruses or harmful components</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">9. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Surinder Singh Seerat and affiliates shall
                  not be liable for any indirect, incidental, special, consequential, or punitive damages
                  arising from your use of or inability to use the website or any content therein.
                </p>
                <p className="mt-2">
                  Our maximum liability for any claim shall not exceed the amount you paid us (if any)
                  in the twelve (12) months preceding the claim.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">10. Indemnification</h3>
                <p>
                  You agree to indemnify and hold harmless Surinder Singh Seerat, affiliates, and
                  representatives from any claims, damages, losses, or expenses arising from your
                  violation of these Terms or your use of the website.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">11. Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of California, United States, without regard to conflict of law principles.
                  Any disputes shall be resolved in the courts of California.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">12. Severability</h3>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions
                  shall continue in full force and effect.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">13. Contact</h3>
                <p>
                  For questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">14. Copyright Permissions</h3>
                <p>
                  If you wish to republish, translate, or use any poetry or content from this website
                  for purposes beyond fair use, please contact us at{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>{' '}
                  with details about your intended use. Permission may be granted on a case-by-case basis.
                </p>
              </div>
            </TabsContent>

            {/* REFUND POLICY */}
            <TabsContent value="refund" className="prose-poetry">
              <h2 className="font-display text-2xl mb-6">Refund Policy</h2>
              <div className="text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  We want you to be completely satisfied with your purchase. This Refund Policy
                  explains our policies for different types of products and services.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">1. Poetry Courses</h3>
                <p>
                  <strong className="text-foreground">30-Day Satisfaction Guarantee</strong>
                </p>
                <p>
                  We offer a full refund on poetry courses if you are not satisfied with your purchase.
                  To qualify for a refund:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request a refund within 30 days of your purchase date</li>
                  <li>Contact us at arz@surinderseerat.com with your order details</li>
                  <li>Include your name, email, and order number (if available)</li>
                  <li>Briefly describe why the course did not meet your expectations</li>
                </ul>
                <p className="mt-4">
                  Refunds will be processed within 7-10 business days to your original payment method.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">2. Digital Products (eBooks, Digital Downloads)</h3>
                <p>
                  Due to the nature of digital products, we generally do not offer refunds on
                  digital downloads once accessed. However, we will consider refunds in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Technical issues that prevent you from accessing the product</li>
                  <li>Duplicate purchases made in error</li>
                  <li>Product significantly different from its description</li>
                </ul>
                <p className="mt-4">
                  Please contact us within 7 days of purchase if you experience any issues.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">3. Physical Books (When Available)</h3>
                <p>
                  For physical book purchases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Damaged or Defective:</strong> We will replace or refund any book that arrives damaged or defective. Contact us within 14 days of delivery with photos of the damage.</li>
                  <li><strong>Wrong Item:</strong> If you receive the wrong book, we will send the correct item at no additional cost.</li>
                  <li><strong>Change of Mind:</strong> We accept returns within 14 days if the book is unused and in original condition. Customer pays return shipping.</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Shipping Costs:</strong> Original shipping costs are non-refundable unless
                  the return is due to our error or a defective product.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">4. How to Request a Refund</h3>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Email us at <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">arz@surinderseerat.com</a></li>
                  <li>Include your full name and email address used for the purchase</li>
                  <li>Provide your order number or purchase date</li>
                  <li>Describe the reason for your refund request</li>
                </ol>
                <p className="mt-4">
                  We will respond to your request within 5 business days and process approved
                  refunds within 7-10 business days.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">5. Exceptions</h3>
                <p>Refunds are not available for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Items purchased on sale or with promotional discounts (unless defective)</li>
                  <li>Bundled products if individual items have been accessed</li>
                  <li>Requests made after the refund period has expired</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">6. Contact</h3>
                <p>
                  For any questions about our refund policy or to request a refund, please contact:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>
                </p>
                <p className="mt-2">
                  We aim to resolve all refund requests fairly and promptly.
                </p>
              </div>
            </TabsContent>

            {/* COOKIE POLICY */}
            <TabsContent value="cookies" className="prose-poetry">
              <h2 className="font-display text-2xl mb-6">Cookie Policy</h2>
              <div className="text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  This Cookie Policy explains how surinderseerat.com uses cookies and similar
                  technologies to recognize you when you visit our website.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device
                  when you visit a website. They are widely used to make websites work more
                  efficiently and provide information to website owners.
                </p>
                <p className="mt-4">
                  Cookies help us remember your preferences, understand how you use our site,
                  and improve your browsing experience.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">2. Types of Cookies We Use</h3>
                <p><strong className="text-foreground">Essential Cookies</strong></p>
                <p>
                  These cookies are necessary for the website to function properly. They enable
                  core functionality such as security, network management, and accessibility.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Session management</li>
                  <li>Form submission functionality</li>
                  <li>Motion preference settings</li>
                </ul>

                <p className="mt-6"><strong className="text-foreground">Analytics Cookies</strong></p>
                <p>
                  These cookies help us understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Pages visited and time spent</li>
                  <li>How you arrived at our site</li>
                  <li>General geographic location (country level)</li>
                </ul>

                <p className="mt-6"><strong className="text-foreground">Preference Cookies</strong></p>
                <p>
                  These cookies remember choices you make to improve your experience.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Reduced motion preference</li>
                  <li>Language preferences (if applicable)</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">3. Third-Party Cookies</h3>
                <p>
                  Some cookies are placed by third-party services that appear on our pages:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Netlify:</strong> Hosting and performance optimization</li>
                  <li><strong>YouTube:</strong> Embedded video content (if you watch videos on our site)</li>
                  <li><strong>SoundCloud:</strong> Embedded audio players</li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">4. Managing Cookies</h3>
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <p className="mt-4"><strong className="text-foreground">Browser Settings</strong></p>
                <p>
                  Most web browsers allow you to manage cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>View and delete cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Clear all cookies when you close your browser</li>
                </ul>
                <p className="mt-4">
                  Please note that blocking cookies may affect website functionality and your
                  user experience.
                </p>

                <p className="mt-6"><strong className="text-foreground">How to Manage Cookies in Common Browsers:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Privacy & Security → Cookies</li>
                </ul>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">5. Do Not Track</h3>
                <p>
                  Some browsers have a &quot;Do Not Track&quot; feature that signals to websites that
                  you do not want your online activity tracked. We respect these signals where
                  technically feasible.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">6. Updates to This Policy</h3>
                <p>
                  We may update this Cookie Policy from time to time. Changes will be posted on
                  this page with an updated revision date.
                </p>

                <h3 className="font-display text-lg text-foreground mt-8 mb-4">7. Contact</h3>
                <p>
                  If you have questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                    arz@surinderseerat.com
                  </a>.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Copyright Notice Section */}
          <div className="mt-16 pt-12 border-t border-border/30">
            <h2 className="font-display text-2xl mb-6 text-center">Copyright & Permissions</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p className="text-center">
                <strong className="text-foreground text-lg">
                  © {new Date().getFullYear()} Surinder Singh Seerat. All Rights Reserved.
                </strong>
              </p>
              <p>
                All poetry, prose, essays, books, audio recordings, and other creative works
                featured on this website are the intellectual property of Surinder Singh Seerat
                and are protected by United States and international copyright laws.
              </p>
              <p>
                <strong className="text-foreground">Requesting Permission:</strong> If you wish to
                reproduce, translate, adapt, or otherwise use any content from this website
                beyond what is permitted under fair use, please contact{' '}
                <a href="mailto:arz@surinderseerat.com" className="text-gold hover:underline">
                  arz@surinderseerat.com
                </a>{' '}
                with details about your intended use. Include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The specific content you wish to use</li>
                <li>The purpose and context of use</li>
                <li>Where and how it will be published or displayed</li>
                <li>Your contact information</li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Fair Use:</strong> Brief quotations for purposes
                of criticism, comment, news reporting, teaching, scholarship, or research may be
                permitted under fair use doctrine. Proper attribution to Surinder Singh Seerat
                is always required.
              </p>
              <p>
                <strong className="text-foreground">Copyright Infringement:</strong> If you believe
                your copyrighted work has been used on this website in a way that constitutes
                infringement, please contact us at arz@surinderseerat.com with a detailed
                description of the alleged infringement.
              </p>
            </div>
          </div>
        </m.div>
      </section>
    </PageLayout>
  );
}
