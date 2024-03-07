/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      fontSize: {
        "2xs": " 0.5rem",
        "3xs": " 0.25rem",
      },
    },
  },
  plugins: [],
};
