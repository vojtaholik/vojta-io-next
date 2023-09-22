const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      typography: (theme) => ({
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
