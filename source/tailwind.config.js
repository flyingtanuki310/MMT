/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mmt: {
          dark: '#283618',
          gold: '#bc6c25',
          light: '#fdfcf8',
          sand: '#d4a373',
          cream: '#fefae0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s infinite alternate',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      }
    },
  },
  plugins: [],
}
