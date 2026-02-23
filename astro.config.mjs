// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],

    site: "https://mike-eki.github.io",
    base: process.env.GITHUB_ACTIONS ? "/CAM-Cursos-Web" : undefined,
    trailingSlash: "never",
    experimental: {
        svgo: true,
        fonts: [
            {
                provider: "local",
                name: "Clash Display",
                cssVariable: "--font-clash-display",
                variants: [
                    {
                        src: [
                            "./src/fonts/ClashDisplay-Variable.ttf"
                        ]

                    }
                ],
                fallbacks: ["sans-serif"],
            }
        ]
    }
});
