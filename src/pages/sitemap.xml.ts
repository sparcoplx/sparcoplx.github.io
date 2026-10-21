import type { APIRoute } from 'astro';

// Solo la página pública: /print y /print-en tienen datos personales y no se indexan.
const pages = ['/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://www.fvilches.cl');
  const urls = pages.map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
