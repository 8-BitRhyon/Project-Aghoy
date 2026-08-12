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
          // Custom service worker (src/sw.ts): implements the Web Share Target
          // (/share POST handler + /share-file) in addition to OCR/model
          // runtime caching. injectManifest is required because a static page
          // cannot read its own POST body - the SW must.
          strategies: 'injectManifest',
          srcDir: 'src',
          filename: 'sw.ts',
          injectManifest: {
            // Large on-demand assets stay OUT of the precache (the SW runtime-
            // caches them CacheFirst): the 14.6MB ONNX, 23.6MB ort-wasm, and
            // 46MB OCR traineddata. maximumFileSizeToCacheInBytes is left at
            // the workbox default so precache stays lean.
            globIgnores: [
              'ocr/**',
              '**/ocr/*.wasm*',
              'models/**',
              '**/models/*.onnx',
              'ort-wasm/**',
              '**/ort-wasm/*.wasm',
              '**/ort-wasm*.wasm',
            ],
            // The vishing drill audio (~900KB total) is small enough to live
            // in the precache: bundled offline, zero network at play time, so
            // the voice works on first launch with no WiFi, ever.
            globPatterns: ['**/*.{js,css,html,json,png,svg,ico,webp,webmanifest,mp3}'],
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
            ],
            // Web Share Target: makes Aghoy appear in the system share sheet so
            // users can highlight a suspicious SMS/chat/image and "Share > Aghoy"
            // to scan it - no copy-paste, no tab juggling. text arrives as form
            // data; images arrive as files routed to the OCR scanner.
            share_target: {
              action: '/share',
              method: 'POST',
              enctype: 'multipart/form-data',
              params: {
                title: 'title',
                text: 'text',
                url: 'url',
                files: [
                  {
                    name: 'file',
                    accept: ['image/*']
                  }
                ]
              }
            }
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