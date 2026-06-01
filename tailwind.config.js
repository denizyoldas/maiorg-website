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
        primary: '#DB2777',
        'primary-dark': '#BE185D',
        'primary-light': '#FDF2F8',
        'primary-ultra': '#FFF0F7',
        secondary: '#F472B6',
        gold: '#A16207',
        'gold-mid': '#D4A520',
        'gold-light': '#FEF3C7',
        foreground: '#831843',
        muted: '#F0EDF4',
        border: '#FBCFE8',
        cream: '#FDF2F8',
        'warm-dark': '#1A0010',
        footer: '#0F0008'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-weeding-1.jpg')",
        'thumb-pattern': "url('/images/thumbnail.jpg')"
      },
      fontFamily: {
        mono: [...fontFamily.mono],
        sans: ['Albert Sans', ...fontFamily.sans],
        serif: ['Cormorant Garamond', ...fontFamily.serif],
        script: ['Great Vibes', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
