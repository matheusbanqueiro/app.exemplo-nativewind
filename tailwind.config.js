/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#e94e1b",
        secondary: "#e6332a",
        terciary: "#d60b52",
        complement1: "#f4f4f4",
        complement2: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
