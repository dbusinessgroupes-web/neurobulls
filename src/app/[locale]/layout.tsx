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

const metadataByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "NeuroBulls — AI Marketing Agency",
    description: "The world's leading AI marketing agency. Hyperrealistic AI models, unlimited creativity, campaigns delivered in 48 hours.",
  },
  es: {
    title: "NeuroBulls — Agencia de Marketing con IA",
    description: "La agencia de marketing con IA líder del mundo. Modelos de IA hiperrealistas, creatividad ilimitada, campañas entregadas en 48 horas.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localeData = metadataByLocale[locale] ?? metadataByLocale.en;

  return {
    title: {
      default: localeData.title,
      template: "%s | NeuroBulls",
    },
    description: localeData.description,
    metadataBase: new URL('https://neurobulls.com'),
    openGraph: {
      type: 'website',
      siteName: 'NeuroBulls',
    },
    twitter: {
      card: 'summary_large_image',
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
  "description": "AI Marketing Agency",
  "email": "neurobulls@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressCountry": "ES",
  },
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
