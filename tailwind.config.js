const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#08BDBA',
        secondary: '#FF9C81',

        green:'#08BDBA',
        greenLight: '#E3EAEA',
        greenDark: '#1A6772',
        greenDarkest: '#0C3E45',

        orange: '#FF9C81',
        orangeLight: '#FFF7EF',
        orangeDark: '#7C3A0A',

        blue: '#1A7093',
        blueLight: '#E6E6E6',
        blueDark: '#10545D',

        yellow: '#F6DD86',
        yellowLight: '#FFFBED',
        yellowDark: '#78682E',

        grayLight: '#F6F6F6',
        }
      },
    screens: {
      'tablet': '720px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    },
  variants: {
    extend: {},
  },
  plugins: [],
}

