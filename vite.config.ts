import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', ''); 

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['ProjectAghoyLogo.png'],
          workbox: {
            // OCR assets (worker, wasm cores, ~15MB traineddata) are only needed
            // when a screenshot is scanned. Exclude from precache and serve via
            // runtime caching instead so the service worker stays lean.
            globIgnores: ['ocr/**', '**/ocr/*.wasm*'],
            runtimeCaching: [
              {
                urlPattern: ({ url }) => url.pathname.startsWith('/ocr/'),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'aghoy-ocr',
                  expiration: { maxEntries: 12, maxAgeSeconds: 60 * 60 * 24 * 30 },
                },
              },
            ],
          },
          manifest: {
            name: 'Project Aghoy',
            short_name: 'Aghoy',
            description: 'AI-powered Scam Detector for the Philippines',
            theme_color: '#0f172a',
            background_color: '#0f172a',
            display: 'standalone',
            orientation: 'portrait',
            icons: [
              {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              react: ['react', 'react-dom'],
              // tesseract.js-core is loaded at runtime from CDN by the worker;
              // chunking it forces a dead require('./tesseract-core.asm') that
              // breaks the rollup build.
              ocr: ['tesseract.js'],
              canvas: ['html2canvas']
            }
          }
        }
      },
      css: {
        postcss: './postcss.config.js',
      }
    };
});