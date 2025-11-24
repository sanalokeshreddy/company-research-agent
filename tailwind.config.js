/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        agent: {
          dark: '#020617', // Deepest slate
          panel: '#0f172a', // Slate 900
          accent: '#3b82f6', // Blue 500
          text: '#f1f5f9', // Slate 100
          muted: '#64748b' // Slate 500
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}