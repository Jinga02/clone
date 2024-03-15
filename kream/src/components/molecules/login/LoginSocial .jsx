/** @format */

import ImageButton from "components/atom/ImageButton";
import React from "react";

export default function LoginSocial() {
  const ButtonStyle =
    "w-full h-16 mb-2 flex items-center justify-center border border-solid border-black border-1 border-opacity-20 rounded-lg font-bold";
  const imgStyle = "w-4 h-4 ml-5 ";
  return (
    <div className=" w-full h-28 mt-10 flex flex-col">
      <ImageButton
        name="네이버로 로그인"
        styleName={ButtonStyle}
        imgStyle={imgStyle}
        imgUrl="asset/icon/naverIcon.png"
      />
      <ImageButton
        name="Apple로 로그인"
        styleName={ButtonStyle}
        imgStyle={imgStyle}
        imgUrl="asset/icon/appleIcon.svg"
      />
    </div>
  );
}
