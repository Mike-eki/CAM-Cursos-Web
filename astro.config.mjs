// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    site: "https://mike-eki.github.io",
    base: "/CAM-Cursos-Web",
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
