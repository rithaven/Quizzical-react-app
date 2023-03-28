/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        "light-gray": "#F5F7FB",
        "purple-blue": "#4D5B9E",
        "dark-blue": "#293264",
        "light-blue": "#D6DBF5",
        "pale-blue": "#DBDEF0",
        "pink": "#F8BCBC",
        "apple-green": "#94D7A2"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "karla": ["Karla", "sans-serif"]
      }
    },
  },
  plugins: [],
}