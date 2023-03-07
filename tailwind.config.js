/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('../public/back1.png')",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif "],
        nunito: ["Nunito Sans", "sans-serif"],
        reem: ["Reem Kufi", "sans-serif"],
      },
    
    },
  },
  plugins: [],
};
