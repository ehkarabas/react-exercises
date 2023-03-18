/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
