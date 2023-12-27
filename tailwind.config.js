/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 20%, 40%, 100%': {transform: 'translateX(0) rotate(0deg)'},
          '10%': {transform: 'translateX(5px) rotate(7deg)'},
          '30%': {transform: 'translateX(-5px) rotate(-7deg)'}
        }
      },
      animation: {
        shake: 'shake 1s linear infinite',
      },
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        ephesis: ['var(--font-ephesis)'],
        nunito: ['var(--font-nunito)'],
        corinthia: ['var(--font-corinthia)'],
      }
    },
  },
  plugins: [],
}