/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "header": "#8bb4f8",
        "primary": "#ed463e",
        "secondary": "#98d3a8",
      },
    },
  },
  plugins: [],
};
