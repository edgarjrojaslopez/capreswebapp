// postcss.config.js
let tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss("./src/tailwind.config.js"),
    require("autoprefixer"),
  ],
}