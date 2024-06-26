/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: { md: { max: "768px" }, sm: { max: "550px" } },
  },
  plugins: [],

}