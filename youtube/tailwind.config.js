/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0000",
      },
      fontSize: {
        "2xs": " 0.5rem",
        "3xs": " 0.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
