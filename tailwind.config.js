/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Figtree', 'sans-serif'],
        'fig': ['Figtree', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

