/** @format */

import Link from "components/atom/Link";
import React from "react";

export default function LoginMenu() {
  const LinkStyle = " text-sm opacity-50";
  return (
    <div className="w-96 flex justify-around ">
      <Link
        url="signUp"
        name="이메일 가입 |"
        styleName={LinkStyle}
        className=" "
      />
      <Link url="" name="이메일 찾기|" styleName={LinkStyle} className=" " />
      <Link url="" name="비밀번호 찾기" styleName={LinkStyle} className=" " />
    </div>
  );
}
