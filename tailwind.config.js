/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'v-dark': '#0B1221',   
        'v-sage': '#aec3b0',   
        'v-orange': '#fb8500', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    }
  },
  plugins: [],
}