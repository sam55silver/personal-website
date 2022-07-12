/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#8bb4f8",
        "darker-base": "#799ED9",
        "very-dark-base": "#566F99",
        "primary": "#ed463e",
        "darker-primary": "#D94038",
        "secondary": "#98d3a8",
        "darker-secondary": "#8ABF98",
      },
    },
  },
  plugins: [],
};
