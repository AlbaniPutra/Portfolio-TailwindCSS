/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['Homepage.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#312e81',
        dark:'#0f172a',
      },
      screens:{
        '2xl':'1320px',
      }, 
    },
  },
  plugins: [],
}

