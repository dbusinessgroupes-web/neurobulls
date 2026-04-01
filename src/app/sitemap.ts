import type { MetadataRoute } from 'next';

const baseUrl = 'https://neurobulls.com';

const pages = [
  '',
  '/services',
  '/work',
  '/about',
  '/contact',
  '/shop',
  '/aviso-legal',
  '/politica-privacidad',
  '/politica-cookies',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}/en${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : page === '/services' ? 0.9 : 0.7,
  }));
}
