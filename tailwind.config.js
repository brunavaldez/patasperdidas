/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2488D8',
        found: '#35C759',
        lost: '#FF4F55',
        bg: '#FAFAF7',
        text: '#222222'
      }
    }
  },
  plugins: []
}
