/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
