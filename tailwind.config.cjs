/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "1/12":"8.333333%" ,
        "11/12":"91.666667%"
      }
    },
  },
  plugins: [],
}
