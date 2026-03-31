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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : '';
    const safeService = service ? escapeHtml(String(service)) : '';
    const safeBudget = budget ? escapeHtml(String(budget)) : '';
    const safeMessage = escapeHtml(message);

    // Log to Vercel (always works, visible in dashboard)
    console.log(JSON.stringify({
      level: 'info',
      type: 'contact_form',
      timestamp: new Date().toISOString(),
      name, email, company: company || '', service: service || '', budget: budget || '', message,
    }));

    // Send via Resend to the account owner email (only verified recipient on free plan)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'NeuroBulls <info@neurobulls.com>',
          to: ['neurobulls@gmail.com', 'dbusinessgroup.es@gmail.com'],
          replyTo: email,
          subject: `NeuroBulls — ${safeName}${safeCompany ? ` (${safeCompany})` : ''} — ${safeService || 'General'}`,
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#E31837;padding:16px 24px;border-radius:12px 12px 0 0;">
                <h2 style="color:white;margin:0;font-size:18px;">Nueva solicitud de contacto</h2>
              </div>
              <div style="background:#141414;padding:24px;border-radius:0 0 12px 12px;color:#FAFAFA;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;color:#C9A84C;font-weight:600;width:100px;">Nombre</td><td style="padding:8px 0;">${safeName}</td></tr>
                  <tr><td style="padding:8px 0;color:#C9A84C;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#E31837;">${safeEmail}</a></td></tr>
                  ${safeCompany ? `<tr><td style="padding:8px 0;color:#C9A84C;font-weight:600;">Empresa</td><td style="padding:8px 0;">${safeCompany}</td></tr>` : ''}
                  ${safeService ? `<tr><td style="padding:8px 0;color:#C9A84C;font-weight:600;">Servicio</td><td style="padding:8px 0;">${safeService}</td></tr>` : ''}
                  ${safeBudget ? `<tr><td style="padding:8px 0;color:#C9A84C;font-weight:600;">Presupuesto</td><td style="padding:8px 0;">${safeBudget}</td></tr>` : ''}
                </table>
                <hr style="border:none;border-top:1px solid #333;margin:16px 0;">
                <p style="color:#C9A84C;font-weight:600;margin-bottom:8px;">Mensaje:</p>
                <p style="line-height:1.6;">${safeMessage.replace(/\n/g, '<br>')}</p>
                <hr style="border:none;border-top:1px solid #333;margin:16px 0;">
                <p style="font-size:12px;color:#666;">Enviado desde neurobulls.com · Responder directamente a ${safeEmail}</p>
              </div>
            </div>
          `,
        });
      } catch (resendError) {
        console.error('Resend error:', resendError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
