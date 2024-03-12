/** @format */

import React from "react";
import Title from "components/atom/Title";
import Button from "components/atom/Button";

export default function Contact() {
  const pStyle = "text-xs opacity-40 my-1";

  return (
    <div className="w-268px flex flex-col ">
      <Title name="고객센터 1588-7813" styleName="font-bold text-base" />
      <p className={pStyle}>운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무)</p>
      <p className={pStyle}>점심시간 평일 13:00 - 14:00</p>
      <p className="my-1 text-sm font-bold opacity-60 ">
        1:1 문의하기는 앱에서만 가능합니다.
      </p>
      <Button
        name="자주 묻는 질문"
        styleName="w-96px h-34px text-xs mt-1 px-auto whitespace-nowrap bg-black text-white font-bold"
      />
    </div>
  );
}
