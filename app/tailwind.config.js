/* global module, process */

module.exports = {
  purge: {
    enabled: process.env.EMBER_ENV === 'production',
    content: [
      './app/components/**/*.hbs',
      './app/templates/**/*.hbs'
    ]
  },
  theme: {
    extend: {
      lineHeight: {
        '14': '3.5rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
