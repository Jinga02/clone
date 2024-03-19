/**
 * @format
 * @type {import('tailwindcss').Config}
 */
function createPx(max, multiple) {}
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      width: {
        ...createPx(),
      },
    },
  },
  plugins: [],
};
