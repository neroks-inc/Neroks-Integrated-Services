/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "magnata": "#720455"
      },
     fontSize:{
      "122": "10px"
     },
     width:{
      '555':'15rem'
     }
    },
  },
  plugins: [],
}