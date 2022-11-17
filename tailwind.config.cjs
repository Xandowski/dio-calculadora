/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        pyramid: "url('/src/assets/images/bg.jpg')"
      },
    },
  },
  plugins: [],
}
