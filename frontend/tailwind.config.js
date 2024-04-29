/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#262626',
        primary: '#eab308',
        secundary: '',
        success_primary: '#84cc16',
        succes_secundary: '#bef264',
        error_primary:'#ef4444',
        error_secundary:'#fca5a5'
      },
      fontFamily:{
        primary:['Poppins']
      }
    },
  },
  plugins: [],
}

