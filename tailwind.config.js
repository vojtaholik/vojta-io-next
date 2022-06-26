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
            fontSize: '0.95rem !important',
            strong: {
              color: theme('colors.white'),
            },
            '.mb-0': {
              marginBottom: theme('margin.0'),
            },
            '.mt-0': {
              marginTop: theme('margin.0'),
            },
            code: {
              color: theme('colors.gray.200'),
              padding: '0.3rem 0.5rem 0.4rem',
              background: theme('colors.gray.800'),
            },
            'code:before': {
              content: '""',
            },
            'code:after': {
              content: '""',
            },
            'h1, h2, h3, h4, h5, p': {
              color: theme('colors.gray.200'),
            },
            hr: {borderColor: theme('colors.gray.700')},
            'ul:not[ul]': {
              paddingTop: theme('padding.5'),
            },
            li: {
              '&:before': {
                opacity: 0.3,
              },
            },
            a: {
              color: theme('colors.blue.300'),
              fontWeight: theme('fontWeight.normal'),
              textDecoration: 'none',
              '&:hover': {},
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
