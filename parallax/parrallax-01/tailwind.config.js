/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',],
  theme: {
    fontFamily:{
      montserrat:['Montserrat'],
    },
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        }
      },
    },
  },
  plugins: [],
}

