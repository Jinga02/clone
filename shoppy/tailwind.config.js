/**
 * @format
 * @type {import('tailwindcss').Config}
 */
function createPx(maxPx, multiple) {
  const result = {};
  for (let i = multiple; i <= maxPx; i += multiple) {
    result[i + "px"] = i + "px";
  }
  return result;
}

function createPercent(maxPercent, multiple) {
  const result = {};
  for (let i = multiple; i <= maxPercent; i += multiple) {
    result[i + "%"] = i + "%";
  }
  return result;
}
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('../public/asset/banner.jpg')`,
      },
      screens: {
        sm: { max: "440px" },
        md: { min: "441px", max: "959px" },
        lg: { min: "960px" },
      },
      width: {
        ...createPx(2000, 2),
        ...createPercent(100, 2),
      },
      height: {
        ...createPx(2000, 2),
        ...createPercent(100, 2),
      },
      spacing: {
        ...createPx(2000, 2),
        ...createPercent(100, 2),
      },
    },
  },
  plugins: [],
};
