import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const sitemapUrl = `${site}${base}/sitemap-index.xml`;
    return new Response(
        `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`,
        {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
        }
    );
};
