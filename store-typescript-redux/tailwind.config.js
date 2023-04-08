/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   firaCode: ["'Fira Code', monospace"],
      // },
      screens: {
        lowest: "280px",
        xs: "330px",
        mobile: "400px",
      },
    },
  },
  plugins: [],
};
