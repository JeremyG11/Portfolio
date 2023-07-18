/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif "],
        nunito: ["Nunito Sans", "sans-serif"],
        reem: ["Reem Kufi", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        opensan: ["Open Sans", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
