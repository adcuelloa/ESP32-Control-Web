import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // No generar manifest, usar el que está en public/site.webmanifest
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      },
      // Desactivar la generación automática del manifest
      manifest: false,
      includeAssets: [
        'favicon.svg',
        'favicon-96x96.png',
        'apple-touch-icon.png',
        'web-app-manifest-192x192.png',
        'web-app-manifest-512x512.png',
        'site.webmanifest',
      ],
      workbox: {
        // Cachear todos los assets (HTML, CSS, JS, imágenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        // Estrategia: Cache First (la app funciona completamente offline)
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false, // Deshabilitado en desarrollo para evitar conflictos
      },
    }),
  ],
  server: {
    port: 5172,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
