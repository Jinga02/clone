/** @format */

import ImageButton from "components/atom/ImageButton";
import React from "react";

export default function LoginSocial() {
  const ButtonStyle =
    "w-full h-full p-3 my-2 flex items-center justify-center border border-solid border-black border-1 border-opacity-20 rounded-lg font-bold";
  return (
    <div className="w-30% flex flex-col my-2">
      <ImageButton
        name="네이버로 로그인"
        styleName={ButtonStyle}
        imgUrl="asset/icon/naverIcon.png"
      />
      <ImageButton
        name="Apple로 로그인"
        styleName={ButtonStyle}
        imgUrl="asset/icon/appleIcon.svg"
      />
    </div>
  );
}
