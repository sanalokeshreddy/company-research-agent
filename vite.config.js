import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext' // Fixes the build warning
  },
  define: {
    // Safe fallback if env vars are missing
    'process.env': {}
  }
})