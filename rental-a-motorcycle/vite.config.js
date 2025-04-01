import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import * as crypto from 'crypto-browserify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./src/tests/setup.js'],
    coverage: {
      provider: 'istanbul'
    }
  },
  define: {
    'crypto': crypto,
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
})
