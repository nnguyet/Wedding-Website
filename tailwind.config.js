/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightpink: '#faf0f2',
        // #fcebee
      },
      keyframes: {
        shake: {
          '0%, 20%, 40%, 100%': {transform: 'translateX(0) rotate(0deg)'},
          '10%': {transform: 'translateX(5px) rotate(7deg)'},
          '30%': {transform: 'translateX(-5px) rotate(-7deg)'}
        }
      },
      animation: {
        shake: 'shake 1s linear infinite',
      }
    },
  },
  plugins: [],
}