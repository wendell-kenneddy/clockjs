const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wallpoet', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
