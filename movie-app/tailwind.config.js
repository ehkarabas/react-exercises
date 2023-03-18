/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // ? kendi theme ayarlarlarimizi eklemek icin bu kismi ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "cyan-main": "#ff4b45",
        "cyan-main": "#50cee4",
      },
      screens: {
        xxs: "400px",
      },
      backgroundImage: {
        fail: "url('https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
};
