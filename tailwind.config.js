/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4169E1",
          dark: "#1B3A57",
        },
        Accent: {
          light: "#FF6F61",
          dark: "#B5534F",
        },
        Neutral: {
          light: "#F5F5F5",
          dark: "#2D2D2D",
        },
        Secondary: {
          light: "#98FF98",
          dark: "#56B38D",
        },
        TextColor: {
          light: "#333333",
          dark: " #E5E5E5",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
    screens: {
      csm: "725px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require('flowbite/plugin')
  ],
};