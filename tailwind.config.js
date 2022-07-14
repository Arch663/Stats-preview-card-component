/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(233, 47%, 7%)",
        primary2: "hsl(244, 38%, 16%)",
        primary3: "hsl(277, 64%, 61%)",
        primary3g: "hsla(277, 64%, 61%, 0.7)",

        neutral1: "hsl(0, 0%, 100%)",
        neutral2: "hsla(0, 0%, 100%, 0.75)",
        neutral3: "hsla(0, 0%, 100%, 0.6)",
      },

      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
