/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'pink': {
        light: '#FFFAF5',
        DEFAULT: '#F7E9E8',
        dark: '#E3C5C1',
      },
      'textColor': {
        DEFAULT: '#645553',
      },
      'brown': {
        DEFAULT: '#A97069',
    }
    },
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
        windsong: ['var(--font-windsong)'],
        lobster: ['var(--font-lobster)'],
      }
    },
  },
  plugins: [],
}