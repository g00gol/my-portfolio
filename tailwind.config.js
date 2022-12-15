/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFEFD7",
        accent: "#80A3FF",
        textGray: "#4D4D4D",
        linear1: "#4324FF",
        linear2: "#0047FE",
        linear3: "#00D1FF",
      },
      fontFamily: {
        quicksand: ["Quicksand"],
        playfair: ["Playfair"],
      },
    },
  },
  plugins: [],
};
