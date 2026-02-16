// FILE 4: supabase/functions/store-waitlist/index.ts
// Store/Bookshop waitlist handler - SECURED

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://surinderseerat.com',
  'https://www.surinderseerat.com',
  'https://surinderseerat.netlify.app',
];

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

const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;

function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

function sanitize(input: string | undefined, maxLength: number): string {
  if (!input) return '';
  return input.toString().trim().slice(0, maxLength).replace(/[<>]/g, '');
}

// Brand colors
const BRAND = {
  background: '#0a0a0b',
  foreground: '#f7f3eb',
  gold: '#d4a84b',
};

// Store waitlist confirmation email
const storeWaitlistHtml = (name: string) => `
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
              <p style="margin: 4px 0 0 0; font-size: 12px; color: ${BRAND.foreground}; opacity: 0.7; font-style: italic;">Poet & Author</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0; color: ${BRAND.foreground}; font-size: 16px; line-height: 1.8;">
              <p style="font-size: 20px; color: ${BRAND.foreground}; margin: 0 0 24px 0;">
                ${name ? `Hello ${name},` : 'Hello,'}
              </p>

              <p style="font-size: 28px; color: ${BRAND.gold}; margin: 0 0 24px 0; line-height: 1.2;">
                In your inbox soon: poetry in every form.
              </p>

              <p style="color: ${BRAND.foreground}; margin: 0 0 20px 0;">
                You're on the list to be first in line when "The Bookshop" opens—bringing Surinder Seerat's eight collections, rare editions, and exclusive bundles directly to your library.
              </p>

              <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${BRAND.gold}; margin: 32px 0 12px 0;">What's coming</p>

              <p style="margin: 8px 0; color: ${BRAND.foreground};">→ <span style="color: ${BRAND.gold};">Physical books:</span> Premium editions shipped to your door. Feel the weight of poetry in your hands.</p>
              <p style="margin: 8px 0; color: ${BRAND.foreground};">→ <span style="color: ${BRAND.gold};">Digital editions:</span> Instant access on any device. Read anywhere, anytime.</p>
              <p style="margin: 8px 0; color: ${BRAND.foreground};">→ <span style="color: ${BRAND.gold};">Signed bundles:</span> Collector's editions with personal inscription from the author.</p>

              <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${BRAND.gold}; margin: 32px 0 12px 0;">As a waitlist member, you'll receive</p>

              <p style="margin: 8px 0; color: ${BRAND.foreground};">✓ Exclusive early-bird pricing</p>
              <p style="margin: 8px 0; color: ${BRAND.foreground};">✓ First access to limited editions</p>
              <p style="margin: 8px 0; color: ${BRAND.foreground};">✓ Special welcome offer from Surinder</p>

              <p style="color: ${BRAND.foreground}; margin: 24px 0 16px 0;">
                The doors open soon. We'll notify you as soon as they do.
              </p>

              <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${BRAND.gold}; margin: 32px 0 12px 0;">In the meantime</p>

              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/books" style="color: ${BRAND.gold}; text-decoration: none;">→ Discover which book speaks to your soul</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/biography" style="color: ${BRAND.gold}; text-decoration: none;">→ Explore the literary journey</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com/tishnagi" style="color: ${BRAND.gold}; text-decoration: none;">→ Listen to poems that inspired these works</a></p>

              <p style="color: ${BRAND.foreground}; margin: 24px 0 8px 0;">
                With warm regards,<br>
                <span style="color: ${BRAND.gold}; font-style: italic;">The Seerat Literary Circle</span>
              </p>

              <div style="height: 1px; background: linear-gradient(to right, transparent, ${BRAND.gold}, transparent); margin: 32px 0;"></div>

              <p style="color: ${BRAND.gold}; font-size: 14px; font-style: italic; margin: 0;">
                P.S. Poetry is meant to be held. Soon, you can hold ours.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0 0 0; border-top: 1px solid ${BRAND.gold};">
              <p style="margin: 0; font-size: 14px; color: ${BRAND.foreground}; opacity: 0.7;">The Seerat Literary Circle</p>
              <p style="margin: 8px 0 0 0; font-size: 12px;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">surinderseerat.com</a></p>
              <p style="margin: 16px 0 0 0; font-size: 11px; color: ${BRAND.foreground}; opacity: 0.5;"><a href="https://surinderseerat.com/unsubscribe" style="color: ${BRAND.foreground}; opacity: 0.5; text-decoration: underline;">Unsubscribe</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Admin notification
const adminNotificationText = (name: string, email: string) => `
New Store Waitlist Signup

Name: ${name || '(not provided)'}
Email: ${email}
Source: store-waitlist
Date: ${new Date().toISOString()}

---
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

// Rate limiting: max 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
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

  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (!checkRateLimit(clientIP)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await req.json();

    // Honeypot check
    if (body.website || body.url || body.phone) {
      return new Response(
        JSON.stringify({ success: true, message: "You're on the list!" }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const email = sanitize(body.email, MAX_EMAIL_LENGTH);
    const firstName = sanitize(body.firstName, MAX_NAME_LENGTH);

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert subscriber with store-waitlist source
    const { error: dbError } = await supabase.from('subscribers').insert([
      {
        email: email.toLowerCase(),
        first_name: firstName || null,
        signup_source: 'store-waitlist',
        icp_segment: 'heritage_keeper',
      },
    ]);

    // Handle duplicate gracefully
    if (dbError) {
      if (dbError.message?.toLowerCase().includes('duplicate')) {
        return new Response(
          JSON.stringify({ success: true, message: "You're already on the waitlist! We'll notify you when the bookshop opens." }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to join waitlist' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fire and forget: Send confirmation email
    sendEmail(
      email,
      'Surinder Singh Seerat <hello@surinderseerat.com>',
      'The Bookshop is opening soon',
      storeWaitlistHtml(firstName || '')
    );

    // Fire and forget: Send admin notification
    sendEmail(
      'arz@surinderseerat.com',
      'Website Notifications <noreply@surinderseerat.com>',
      `Store Waitlist: ${firstName || email}`,
      `<pre style="font-family: monospace; background: #1a1a1a; color: #fff; padding: 20px;">${adminNotificationText(firstName || '', email)}</pre>`,
      adminNotificationText(firstName || '', email)
    );

    return new Response(
      JSON.stringify({ success: true, message: "You're on the list! We'll notify you when the bookshop opens." }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Store waitlist error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
