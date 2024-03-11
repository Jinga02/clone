/** @format */

import Link from "components/atom/Link";
import React from "react";

export default function LoginMenu() {
  const LinkStyle = "mx-1 text-sm opacity-50";
  return (
    <div className="w-40% flex justify-around p-2 my-2">
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
