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
            // OCR + on-device model assets (worker, wasm cores, ONNX, traineddata,
            // and the transformers.js ONNX Runtime wasm) are only needed when a
            // scan actually runs. Exclude from precache and serve via runtime
            // caching instead so the service worker stays lean.
            //
            // Note: maximumFileSizeToCacheInBytes is deliberately NOT set. The
            // workbox default (2 MiB) applies to PRECACHE only; the CacheFirst
            // runtime rules below cache the 14.6MB ONNX and 23.6MB ort-wasm
            // without that limit. Setting a cap here would silently block the
            // model from the runtime cache.
            globIgnores: [
              'ocr/**',
              '**/ocr/*.wasm*',
              'models/**',
              '**/models/*.onnx',
              'ort-wasm/**',
              '**/ort-wasm/*.wasm',
              '**/ort-wasm*.wasm',
            ],
            runtimeCaching: [
              {
                urlPattern: ({ url }) => url.pathname.startsWith('/ocr/'),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'aghoy-ocr',
                  expiration: { maxEntries: 12, maxAgeSeconds: 60 * 60 * 24 * 30 },
                },
              },
              {
                urlPattern: ({ url }) => url.pathname.startsWith('/models/'),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'aghoy-models',
                  expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 30 },
                },
              },
              {
                // Self-hosted ONNX Runtime wasm + factory (fetch at first
                // inference). CacheFirst so it loads once, offline-ready.
                urlPattern: ({ url }) => url.pathname.startsWith('/ort-wasm/'),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'aghoy-ort-wasm',
                  expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 30 },
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