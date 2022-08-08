const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              fontSize: theme('fontSize.7xl'),
            },
            h2: {
              fontSize: theme('fontSize.4xl'),
            },
          },
        },
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            fontFamily: theme('fontFamily.mono').join(', '),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
