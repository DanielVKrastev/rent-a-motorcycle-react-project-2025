import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
  base: './',
  build: {
    assetsDir: 'assets', // директория за assets
    emptyOutDir: true, // изчиства dist при нов билд
    rollupOptions: {
      input: {
        main: './index.html', // основната HTML страница
      },
    },
  },
})
