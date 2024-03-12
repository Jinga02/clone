/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const sizeList = (arrayLength, multiple, unit = "px") => {
  let resultObject = {};

  for (let i = 0; i < arrayLength; i++) {
    const key = `${i * multiple}${unit}`;
    resultObject[key] = key;
  }

  return resultObject;
};

// 이 코드는 arrayLength 매개변수로 전달받은 길이만큼의 배열을 생성하지 않고,
// 직접 for 반복문을 사용하여 객체를 생성합니다. 각 반복에서 계산된 키와 값을 객체에 추가합니다.
// 이 방식은 명시적이고, 'Array.from'과 'map' 함수를 사용한 이전 방식보다 이해하기 쉽고, 실행 속도도 더 빠를 수 있습니다.

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
      width: {
        pc_header_width: "1200px",
        pc_main_width: "1280px",
        pc_login_width: "400px",
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
        ...sizeList(640, 2),
      },
      height: {
        pc_top_header_height: "22px",
        pc_main_header_height: "64px",
        pc_header_hiehgt: "86px",
        pc_login_height: "754px",
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
        ...sizeList(640, 2),
      },
      padding: {
        pc_top_header: "8px 40px 0",
        pc_main_header: "20px 40px",
        pc_header_hiehgt: "86px 0 0 0",
        pc_login_main: "0 40px",
        pc_main_content: "60px 0 160px 0",
        pc_footer: "50px 40px",
        ...sizeList(640, 2),
      },
      margin: {
        ...sizeList(640, 2),
      },
      spacing: {
        ...sizeList(640, 2),
      },
    },
  },
  plugins: [],
};
