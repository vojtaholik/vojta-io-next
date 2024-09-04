const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-maison-neue)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-maison-neue-mono)', ...defaultTheme.fontFamily.mono],
        pixel: ['var(--font-departure-mono)', ...defaultTheme.fontFamily.mono],
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gray: {...colors.neutral},
        orange: {DEFAULT: '#FF5500'},
        primary: '#FFA133',
        green: {
          DEFAULT: '#1D725C',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.foreground'),
            },
            a: {
              color: theme('colors.foreground'),
              '&:hover': {
                color: theme('colors.foreground'),
              },
            },
            // fontFamily: theme('fontFamily.mono').join(', '),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
