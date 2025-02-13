/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // darkMode: ['selector', '[data-mode="dark"]'],
  darkMode: 'class',
  plugins: [require('tailwindcss-primeui')],
}
