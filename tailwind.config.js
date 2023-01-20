/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],

  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
      },
      container: {
        center: true,
      },
    },
  },
};
