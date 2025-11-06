/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        dark: '#000000',
        'dark-gray': '#0a0a0a',
        'darker-gray': '#1a1a1a',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}