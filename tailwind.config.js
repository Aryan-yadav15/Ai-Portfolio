/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(114deg, rgba(216, 213, 209, .6), #f1f0ee 44%, rgba(216, 213, 209, .6))',
      },
      colors: {
        transparent: 'transparent',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        customDarkGray: '#161616', // Replace with your exact RGB values
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      })
    }
  ],
}