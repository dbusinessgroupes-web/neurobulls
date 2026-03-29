import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || '');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
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

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof name !== 'string' || name.length > 200) {
      return NextResponse.json({ error: 'Name must be 200 characters or less' }, { status: 400 });
    }

    if (typeof email !== 'string' || email.length > 320) {
      return NextResponse.json({ error: 'Email must be 320 characters or less' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (company && (typeof company !== 'string' || company.length > 200)) {
      return NextResponse.json({ error: 'Company must be 200 characters or less' }, { status: 400 });
    }

    if (typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json({ error: 'Message must be 5000 characters or less' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : '';
    const safeService = service ? escapeHtml(String(service)) : '';
    const safeBudget = budget ? escapeHtml(String(budget)) : '';
    const safeMessage = escapeHtml(message);

    await getResend().emails.send({
      from: 'NeuroBulls <onboarding@resend.dev>',
      to: 'neurobulls@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
        ${safeService ? `<p><strong>Service:</strong> ${safeService}</p>` : ''}
        ${safeBudget ? `<p><strong>Budget:</strong> ${safeBudget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
