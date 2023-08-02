/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yekan_reqular': ['Yekan_reqular'],
        'yekan_bold': ['Yekan_bold'],
        'yekan_semibold': ['Yekan_semibold'],
        'yekan_extrabold': ['Yekan_extrabold'],
        'yekan_black': ['Yekan_black'],
        'yekan_semiblack': ['Yekan_semiblack'],
        'yekan_thin': ['Yekan_thin'],
        'yekan_light': ['Yekan_light'],  
      },
      colors: {
        'primary': '#002B5B',
        'secondary': '#B1B2FF',
        'thirty': '#FF8787',
        'success': '#8FE3CF',
        'dark': '#1a1a1a',
        'light': '#fff',
      }
    },
  },
  plugins: [],
}

