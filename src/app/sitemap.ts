import type { MetadataRoute } from 'next';

const locales = ['en', 'es'];
const baseUrl = 'https://neurobulls.com';

const pages = [
  '',
  '/services',
  '/work',
  '/about',
  '/contact',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/services' ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
