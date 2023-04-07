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
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#016450", //hijau
          neutral: "#999999", //gray
        },
      },
    ]
  },
  plugins: [require("daisyui")],
};
