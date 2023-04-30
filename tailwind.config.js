/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
      }
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#333333',
      'light-gray': '#FAFAFA',
      'orange': '#FA641E',
      'dark-gray': '#676767',
      'medium-gray': '#9F9F9F'
    }
  },
  plugins: [],
}

