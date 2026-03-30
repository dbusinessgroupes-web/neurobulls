import { NextResponse } from 'next/server';

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimit.set(ip, recent);
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof name !== 'string' || name.length > 200 ||
        typeof email !== 'string' || email.length > 320 ||
        typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json({ error: 'Invalid field length' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Try Resend first if configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeCompany = company ? escapeHtml(company) : '';
      const safeService = service ? escapeHtml(String(service)) : '';
      const safeBudget = budget ? escapeHtml(String(budget)) : '';
      const safeMessage = escapeHtml(message);

      const { error: resendError } = await resend.emails.send({
        from: 'NeuroBulls <onboarding@resend.dev>',
        to: 'neurobulls@gmail.com',
        replyTo: email,
        subject: `NeuroBulls — New inquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ''}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;">
            <div style="background:#E31837;padding:16px 24px;border-radius:8px 8px 0 0;">
              <h2 style="color:white;margin:0;font-size:20px;">New Contact Form Submission</h2>
            </div>
            <div style="background:#141414;padding:24px;border-radius:0 0 8px 8px;color:#FAFAFA;">
              <p><strong style="color:#C9A84C;">Name:</strong> ${safeName}</p>
              <p><strong style="color:#C9A84C;">Email:</strong> ${safeEmail}</p>
              ${safeCompany ? `<p><strong style="color:#C9A84C;">Company:</strong> ${safeCompany}</p>` : ''}
              ${safeService ? `<p><strong style="color:#C9A84C;">Service:</strong> ${safeService}</p>` : ''}
              ${safeBudget ? `<p><strong style="color:#C9A84C;">Budget:</strong> ${safeBudget}</p>` : ''}
              <hr style="border:none;border-top:1px solid #333;margin:16px 0;">
              <p><strong style="color:#C9A84C;">Message:</strong></p>
              <p>${safeMessage.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        `,
      });

      if (!resendError) {
        return NextResponse.json({ success: true });
      }
      console.error('Resend error, falling back:', resendError);
    }

    // Fallback: store submission and notify via console (visible in Vercel logs)
    console.log(JSON.stringify({
      level: 'info',
      type: 'contact_form',
      timestamp: new Date().toISOString(),
      name, email, company: company || '', service: service || '', budget: budget || '', message,
    }));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
