/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lemonada': ['Lemonada', 'cursive'],
        'barlow' : ['Barlow Semi Condensed', 'sans-serif']
      },
    },
    colors: {
      'maincolor': '#FEF1C3',
      'darkaccent' : '#7A7C96',
      'lightaccent' : '#9B9D8B',
      'darkshade' : '#DF5A60',
      'lightshade' : '#F1F4F4',
      'textcolor' : '#000000',
      'buttoncolor' : '#B1AFC6',
      'buttoncolor2': '#797792',
      'commentcolor' : '#7C7C7B',
    },
    
  },
  plugins: [],
}