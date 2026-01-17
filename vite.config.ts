/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'src/contentScript/index.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'content' 
            ? 'static/js/content.js' 
            : 'static/js/[name].js'
        },
        chunkFileNames: 'static/js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'static/css/[name].[ext]'
          }
          return 'assets/[name].[ext]'
        },
      },
    },
    // Don't minify for easier debugging in Chrome extension
    minify: true,
    // Disable code splitting for Chrome extension compatibility
    cssCodeSplit: false,
  },
  // Ensure public assets are copied
  publicDir: 'public',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})

