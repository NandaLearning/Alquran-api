import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';



export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: 'myQuran.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});