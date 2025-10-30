/** @type {import('tailwindcss').Config} */
export default {
  lightMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibmplex': ['IBM Plex Serif', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'custom-white':'#F6F6F6',
        'custom-light':'#212121',
        'custom-light-second':'#2B2B2B',
        'custom-green':'#C1DCDC',
        'custom-light-green':'#D8DCDC',
        'custom-light-green':'#b0c2c2',
      }
    },
    
  },
  plugins: [],
}
