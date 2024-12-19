/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adicione os tipos que você está usando
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6324C6',
        footer: '#320e6b',
        'yellow-title': '#FFB800',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
    },
  },
  plugins: [],
}
