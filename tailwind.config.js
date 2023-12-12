/** @type {import('tailwindcss').Config} */
export default {
  content: [ `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`, ],
  theme: {
    extend: {
      colors: {
        "latar" : "#85C67B",
        "warnalist" : "#1FAB81" 
      },
      fontfamily:{
        'Sansita': "Sansita"
      } 
    },
  },
  //eslint-disable-next-line
  plugins: [require("daisyui")],
}

