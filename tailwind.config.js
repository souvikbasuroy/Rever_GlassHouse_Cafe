/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          red: '#D62828',
          yellow: '#F77F00',
          pink: '#FCBF49', // Adjusted to be more like a warm yellow/pink as requested
          darkGreen: '#0A2F1F', // Real forest green
          black: '#062016', // Deep Emerald instead of pure black
          white: '#FCFBF4',
          accentPink: '#FFD1DC', // True pink for menu cards
        }
      },
      fontFamily: {
        serif: ['Italianno', 'cursive'],
        sans: ['Cookie', 'cursive'],
        italianno: ['Italianno', 'cursive'],
        cookie: ['Cookie', 'cursive'],
        imperial: ['Imperial Script', 'cursive'],
      },
      animation: {
        'scroll-infinite': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
