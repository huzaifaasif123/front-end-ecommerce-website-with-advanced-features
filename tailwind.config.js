/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        palette1:"#03045E",
        palette2:"#023E8A",
        palette3:"#0077B6",
        palette4:"#0096C7",
        palette5:"#00B4D8",
        palette6:"#48CAE4",
        palette7:"#90E0EF",
        palette8:"#ADE8F4",
        palette9:"#CAF0F8",
      }
      ,fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

