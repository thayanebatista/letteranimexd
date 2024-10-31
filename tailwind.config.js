/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adicione os tipos que você está usando
  ],
  theme: {
    extend: {
      colors: {
        'header': '#6324C6',
        'yellow-title': '#FFB800',
      },
    },
  },
  plugins: [],
}
