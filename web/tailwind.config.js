module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '600px'},
      'md': {'min': '641px', 'max': '1280px'}
    },
    extend: {
      colors:{
        brand:{
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius:{
        md:'4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
