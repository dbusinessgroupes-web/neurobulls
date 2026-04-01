import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "NeuroBulls — AI Agency | Visual Production, Automation & Intelligence",
      template: "%s | NeuroBulls",
    },
    description: "NeuroBulls helps businesses create stunning AI visual content, automate operations, and scale with intelligent agents. Photography, video, voice AI, and automation services.",
    keywords: "AI agency, AI visual production, AI automation, AI photography, AI video production, AI agents, prompt engineering, business AI, AI content creation, AI headshots, AI food photography, AI real estate staging, virtual staging, AI voice assistant, chatbot for business, workflow automation, AI consulting, Dublin AI agency, Europe AI agency, hyper-realistic AI images, AI prompts, midjourney prompts, FLUX prompts",
    metadataBase: new URL('https://neurobulls.com'),
    openGraph: {
      type: 'website',
      siteName: 'NeuroBulls',
      title: 'NeuroBulls — AI Agency | Visual Production, Automation & Intelligence',
      description: 'NeuroBulls helps businesses create stunning AI visual content, automate operations, and scale with intelligent agents.',
      url: 'https://neurobulls.com',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NeuroBulls — AI Agency | Visual Production, Automation & Intelligence',
      description: 'NeuroBulls helps businesses create stunning AI visual content, automate operations, and scale with intelligent agents.',
    },
    robots: {
      index: true,
      follow: true,
    },
    themeColor: '#0A0A0A',
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NeuroBulls",
  "url": "https://neurobulls.com",
  "logo": "https://neurobulls.com/favicon.svg",
  "description": "AI agency specializing in visual production, automation, and intelligent agents for businesses.",
  "email": "neurobulls@gmail.com",
  "sameAs": ["https://instagram.com/neurobulls"],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
