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
      'maincolor': '#9D9CAF',
      'darkaccent' : '#7A7C96',
      'lightaccent' : '#9B9D8B',
      'darkshade' : '#465772',
      'lightshade' : '#F1F4F4',
      'buttoncolor' : '#B1AFC6',
      'buttoncolor2': '#797792',
      'commentcolor' : '#7C7C7B',
    },
    
  },
  plugins: [],
}