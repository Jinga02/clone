/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: { max: "440px" },
        md: { max: "768px" },
        lg: { max: "960px" },

        // sm: "440px",
        // => @media (min-width: 768px) { ... }
        // StyleCard col-2
        // Header 대신 검색 창

        // LoginPage, SignUpPage 동일
        // Footer사라짐
        // 모든 input, button w-full

        // md: "768px",
        // => @media (min-width: 960px) { ... }
        // StyleaAge
        // StyleTopNav 사라짐 -> 근데 걍 냅두자
        // Bottom에 메뉴 바 생김

        // LoginPage
        // Header 사라짐
      },
      colors: { gray: "#EBEBEB" },
      fontSize: {
        "2xs": " 0.5rem",
        "3xs": " 0.25rem",
      },
      padding: {
        pc_top_header: "8px 40px 0",
        pc_main_header: "20px 40px",
        pc_header_hiehgt: "86px 0 0 0",
        pc_main: "0 40px",
        pc_main_content: "60px 0 160px 0",
        pc_footer: "50px 40px",
      },
      // header

      // topHeader 1200 x 22 8 0 40
      // mainHeader 1200 x 64 20 40

      // content
      // 1200 x 754
      // margint auto
      // padding 60 40 160

      // footer
      // 1200 x 546
      // padding 50 40
      // margin auto

      height: {
        pc_top_header_height: "22px",
        pc_main_header_height: "64px",
        pc_header_hiehgt: "86px",
        pc_content_height: "754px",
        pc_footer_height: "546px",
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
        "110%": "110%",
        "120%": "120%",
      },
      width: {
        pc_header_width: "1200px",
        pc_main_width: "1200px",
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      inset: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      spacing: {
        "5%": "5%",
        "10%": "10%",
        "11%": "11%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
