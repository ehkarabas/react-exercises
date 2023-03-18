/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        lowest: "280px",
        xxs: "400px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};
