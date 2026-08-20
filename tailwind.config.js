/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stans: {
          navy: '#0F172A',         // Rich Dark Midnight Blue
          slate: '#1E293B',        // Deep Slate
          'light-slate': '#334155',  // Elevated slate
          gold: '#0284C7',         // Vibrant Cyan/Sky Blue matching logo icon
          'gold-hover': '#0369A1',   // Deeper Cyan Blue on hover
          'gold-light': '#F0F9FF',   // Soft Cyan Tint background
          'gold-border': 'rgba(2, 132, 199, 0.25)',
          cyan: '#00A8E8',         // Logo primary cyan
          'cyan-bright': '#38BDF8', // Accent highlight cyan
          grey: '#94A3B8',         // Warm Slate Grey
          offwhite: '#F8FAFC',     // Clean Off-White background
          white: '#FFFFFF',
          dark: '#0A0F1D'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'gold-glow': '0 10px 30px -5px rgba(2, 132, 199, 0.35)',
      }
    },
  },
  plugins: [],
}
