/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textLight: "#FF0000",
        textDark: "white",
        bgLight: "white",
        bgDark: "black",
      },
    },
  },
  plugins: [],
};
