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
          navy: '#10182B',
          slate: '#1B2540',
          'light-slate': '#243050',
          gold: '#C0862D',
          'gold-hover': '#D9A24C',
          'gold-light': '#FDF8F0',
          'gold-border': 'rgba(192, 134, 45, 0.25)',
          grey: '#8B8F98',
          offwhite: '#F7F6F3',
          white: '#FFFFFF',
          dark: '#0B101D'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(16, 24, 43, 0.08)',
        'gold-glow': '0 10px 30px -5px rgba(192, 134, 45, 0.3)',
      }
    },
  },
  plugins: [],
}
