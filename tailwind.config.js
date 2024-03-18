/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            "-webkit-transform": "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            "-webkit-transform": "translateY(0)",
          },
        },
        fadeDown: {
          "0%": {
            opacity: "0",
            "-webkit-transform": "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            "-webkit-transform": "translateY(0)",
          },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-in-out",
        fadeDown: "fadeDown 1s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
