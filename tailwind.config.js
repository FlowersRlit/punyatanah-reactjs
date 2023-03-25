/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        hijau1: "#016450",
        orange1: "#FF6500",
        black1: "#212121",
        gray1: "#999999",
      }
    }
  },
  plugins: [require("daisyui")],
};
