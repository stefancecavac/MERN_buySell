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
        secundary: ''
      },
      fontFamily:{
        primary:['Poppins']
      }
    },
  },
  plugins: [],
}

