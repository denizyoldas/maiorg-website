/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0081bc',
        footer: '#00142f'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-weeding-1.jpg')"
      },
      fontFamily: {
        mono: [...fontFamily.mono],
        sans: ['Albert Sans', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
