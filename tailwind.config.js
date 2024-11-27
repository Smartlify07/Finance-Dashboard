/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#f3f4f8',
        black: '#222222',
        white: '#ffffff',
        'blue-primary': '#003eff',
        'blue-secondary': '#4967d5',
        'blue-gray': '#F3F4F8',
        green: '#30c52b',
        'black-100': '#5f5f5f',
        'black-text': '#000003',
        'gray-50': '#5E5E5E',
      },

      fontFamily: {
        inter: 'Inter, sans-serif',
        intertight: 'Inter Tight, sans-serif;',
        raleway: 'Raleway, serif',
        manrope: 'Manrope, sans-serif',
      },

      screens: {
        xxl: '1440px',
        '2lg': '1200px',
      },
    },
  },
  plugins: [],
};
