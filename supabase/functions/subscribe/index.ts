// FILE 1: supabase/functions/subscribe/index.ts
// Newsletter subscription handler - SECURED

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
const MAX_SOURCE_LENGTH = 50;

// Brand colors
const BRAND = {
  background: '#0a0a0b',
  foreground: '#f7f3eb',
  gold: '#d4a84b',
};

// Strict email validation
function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Sanitize string input
function sanitize(input: string | undefined, maxLength: number): string {
  if (!input) return '';
  return input.toString().trim().slice(0, maxLength);
}

// Email templates
const welcomeEmailHtml = (name: string) => `
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
                ${name ? `Hello ${name},` : 'Hello,'}
              </p>

              <p style="font-size: 28px; color: ${BRAND.gold}; margin: 0 0 24px 0; line-height: 1.2;">
                You've joined something timeless.
              </p>

              <p style="color: ${BRAND.foreground}; margin: 0 0 20px 0;">
                A circle of readers, seekers, and scholars who gather around the work of Surinder Singh Seerat—a poet-physicist who has spent five decades exploring consciousness, longing, and the immigrant experience through the ancient form of the ghazal and beyond.
              </p>

              <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${BRAND.gold}; margin: 32px 0 12px 0;">What awaits you in this circle</p>

              <p style="margin: 8px 0;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">→ Monthly verse: Poems exploring tishnagi (longing), identity, and belonging</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">→ Craft lessons: Behind-the-scenes insights into the poetic process</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">→ The tradition: Essays on ghazal heritage and literary significance</a></p>
              <p style="margin: 8px 0;"><a href="https://surinderseerat.com" style="color: ${BRAND.gold}; text-decoration: none;">→ Community: Invitations to readings, kavi darbars, and literary gatherings</a></p>

              <p style="color: ${BRAND.foreground}; margin: 24px 0 16px 0;">
                To begin, we invite you to listen to <span style="color: ${BRAND.gold};">Tishnagi</span>—an album of ghazals that capture the yearning at the heart of human experience.
              </p>

              <p style="margin: 24px 0;">
                <a href="https://surinderseerat.com/tishnagi" style="display: inline-block; padding: 16px 32px; border: 1px solid ${BRAND.gold}; color: ${BRAND.gold}; text-decoration: none; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;">Listen Now</a>
              </p>

              <p style="color: ${BRAND.gold}; font-size: 20px; margin: 32px 0 8px 0; font-style: italic;">
                Welcome to the circle${name ? `, ${name}` : ''}.
              </p>

              <p style="color: ${BRAND.foreground}; margin: 24px 0 8px 0;">
                Until the next poem,<br>
                <span style="color: ${BRAND.gold}; font-style: italic;">Surinder Singh Seerat &amp; The Seerat Circle</span>
              </p>

              <div style="height: 1px; background: linear-gradient(to right, transparent, ${BRAND.gold}, transparent); margin: 32px 0;"></div>

              <p style="color: ${BRAND.gold}; font-size: 14px; font-style: italic; margin: 0;">
                P.S. Every member of this circle carries something we hold sacred—the belief that poetry matters. You're among them now.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0 0 0; border-top: 1px solid ${BRAND.gold};">
              <p style="margin: 0; font-size: 14px; color: ${BRAND.foreground}; opacity: 0.7;">The Seerat Circle</p>
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

const adminNotificationText = (name: string, email: string, source: string) => `
New Newsletter Subscriber

Name: ${name || '(not provided)'}
Email: ${email}
Source: ${source}
Date: ${new Date().toISOString()}

---
Supabase Dashboard: https://supabase.com/dashboard
`;

// Determine ICP segment
function getSegment(source: string): string {
  const culturalSources = ['homepage', 'tishnagi', 'ghazal-history', 'connect'];
  return culturalSources.includes(source) ? 'cultural_explorer' : 'heritage_keeper';
}

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
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 5;

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
      JSON.stringify({ success: false, error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await req.json();

    // Honeypot check - if this field is filled, it's a bot
    if (body.website || body.url || body.phone) {
      // Silently reject but return success to fool bots
      return new Response(
        JSON.stringify({ success: true, message: 'Welcome! Check your email for a special message.' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const email = sanitize(body.email, MAX_EMAIL_LENGTH);
    const firstName = sanitize(body.firstName, MAX_NAME_LENGTH);
    const source = sanitize(body.source, MAX_SOURCE_LENGTH) || 'homepage';

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

    // Determine segment
    const segment = getSegment(source);

    // Insert subscriber
    const { error: dbError } = await supabase.from('subscribers').insert([
      {
        email: email.toLowerCase(),
        first_name: firstName || null,
        signup_source: source,
        icp_segment: segment,
      },
    ]);

    // Handle duplicate gracefully
    if (dbError) {
      if (dbError.message?.toLowerCase().includes('duplicate')) {
        return new Response(
          JSON.stringify({ success: true, message: "You're already subscribed!" }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to subscribe' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fire and forget: Send welcome email
    sendEmail(
      email,
      'Surinder Singh Seerat <hello@surinderseerat.com>',
      'Welcome to the circle of poetry',
      welcomeEmailHtml(firstName)
    );

    // Fire and forget: Send admin notification
    sendEmail(
      'arz@surinderseerat.com',
      'Website Notifications <noreply@surinderseerat.com>',
      `New subscriber: ${firstName || email}`,
      `<pre style="font-family: monospace; background: #1a1a1a; color: #fff; padding: 20px;">${adminNotificationText(firstName, email, source)}</pre>`,
      adminNotificationText(firstName, email, source)
    );

    return new Response(
      JSON.stringify({ success: true, message: 'Welcome! Check your email for a special message.' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Subscribe error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
