/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxl': '980px',
      ...require('tailwindcss/defaultTheme').screens,
    },
  },
  plugins: [],
}