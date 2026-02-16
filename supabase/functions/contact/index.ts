// FILE 2: supabase/functions/contact/index.ts
// Contact form handler - SECURED

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://surinderseerat.com',
  'https://www.surinderseerat.com',
  'https://surinderseerat.netlify.app',
];

// Get CORS headers based on request origin
function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

// Input validation constants
const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// Brand colors
const BRAND = {
  background: '#0a0a0b',
  foreground: '#f7f3eb',
  gold: '#d4a84b',
};

// Valid inquiry types
const VALID_INQUIRY_TYPES = ['general', 'collaboration', 'academic', 'library_acquisition'];

// Strict email validation
function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Sanitize string input (also escapes HTML)
function sanitize(input: string | undefined, maxLength: number): string {
  if (!input) return '';
  return input
    .toString()
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Remove potential HTML tags
}

// Contact confirmation email (to user)
const contactConfirmationHtml = (name: string, subject: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.background}; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.background};">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: ${BRAND.background};">
          <tr>
            <td style="padding: 0 0 32px 0; border-bottom: 1px solid ${BRAND.gold};">
              <p style="margin: 0; font-size: 24px; color: ${BRAND.gold}; font-weight: 500;">Surinder Singh Seerat</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: ${BRAND.foreground}; opacity: 0.7; font-style: italic;">Poet &amp; Author</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0; color: ${BRAND.foreground}; font-size: 16px; line-height: 1.8;">
              <p style="font-size: 20px; color: ${BRAND.foreground}; margin: 0 0 24px 0;">
                Hello ${name},
              </p>

              <p style="color: ${BRAND.foreground}; margin: 0 0 20px 0;">
                Thank you for reaching out. Your words have found their way to us.
              </p>

              <p style="color: ${BRAND.foreground}; margin: 0 0 20px 0;">
                We've received your message about "<span style="color: ${BRAND.gold};">${subject}</span>" and are grateful for your inquiry. In the spirit of poetry, we believe every conversation deserves a thoughtful response—and you'll hear from us within 24 hours.
              </p>

              <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${BRAND.gold}; margin: 32px 0 12px 0;">Until then, explore more</p>

              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/tishnagi" style="color: ${BRAND.gold}; text-decoration: none;">→ Listen to Tishnagi (Thirst)</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/books" style="color: ${BRAND.gold}; text-decoration: none;">→ Explore the poetry collection</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/biography" style="color: ${BRAND.gold}; text-decoration: none;">→ Discover the literary journey</a></p>

              <p style="color: ${BRAND.foreground}; margin: 24px 0 8px 0;">
                With warm regards,<br>
                <span style="color: ${BRAND.gold}; font-style: italic;">The Seerat Literary Circle</span>
              </p>

              <div style="height: 1px; background: linear-gradient(to right, transparent, ${BRAND.gold}, transparent); margin: 32px 0;"></div>

              <p style="color: ${BRAND.gold}; font-size: 14px; font-style: italic; margin: 0;">
                P.S. Poetry thrives in patience. Thank you for yours.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0 0 0; border-top: 1px solid ${BRAND.gold};">
              <p style="margin: 0; font-size: 14px; color: ${BRAND.foreground}; opacity: 0.7;">The Seerat Literary Circle</p>
              <p style="margin: 8px 0 0 0; font-size: 12px;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">surinderseerat.com</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Admin notification email
const adminNotificationText = (name: string, email: string, subject: string, message: string, inquiryType: string) => `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Inquiry Type: ${inquiryType}
Date: ${new Date().toISOString()}

Message:
${message}

---
Reply to: ${email}
Supabase Dashboard: https://supabase.com/dashboard
`;

// Send email via Resend
async function sendEmail(to: string, from: string, subject: string, html: string, text?: string) {
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set');
    return;
  }

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
        text,
      }),
    });
  } catch (err) {
    console.error('Email send error:', err);
  }
}

// Rate limiting: max 3 contact form submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Rate limiting check
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                   req.headers.get('x-real-ip') ||
                   'unknown';

  if (!checkRateLimit(clientIP)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Too many requests. Please wait before submitting again.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await req.json();

    // Honeypot check - if this field is filled, it's a bot
    if (body.website || body.url || body.company) {
      return new Response(
        JSON.stringify({ success: true, message: 'Thank you! We will respond within 24 hours.' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const name = sanitize(body.name, MAX_NAME_LENGTH);
    const email = sanitize(body.email, MAX_EMAIL_LENGTH);
    const subject = sanitize(body.subject, MAX_SUBJECT_LENGTH);
    const message = sanitize(body.message, MAX_MESSAGE_LENGTH);
    const inquiryType = body.inquiryType;

    // Validate required fields
    if (!name || !email || !subject || !message || !inquiryType) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate inquiry type
    if (!VALID_INQUIRY_TYPES.includes(inquiryType)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid inquiry type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert contact inquiry
    const { error: dbError } = await supabase.from('contact_inquiries').insert([
      {
        name,
        email: email.toLowerCase(),
        subject,
        message,
        inquiry_type: inquiryType,
        responded: false,
      },
    ]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to submit inquiry. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fire and forget: Send confirmation email to user
    sendEmail(
      email,
      'Surinder Singh Seerat <noreply@surinderseerat.com>',
      'Your message has arrived',
      contactConfirmationHtml(name, subject)
    );

    // Fire and forget: Send admin notification
    sendEmail(
      'arz@surinderseerat.com',
      'Website Notifications <noreply@surinderseerat.com>',
      `New Contact: ${subject}`,
      `<pre style="font-family: monospace; background: #1a1a1a; color: #fff; padding: 20px;">${adminNotificationText(name, email, subject, message, inquiryType)}</pre>`,
      adminNotificationText(name, email, subject, message, inquiryType)
    );

    return new Response(
      JSON.stringify({ success: true, message: 'Thank you! We will respond within 24 hours.' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Contact error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
