/** @format */

import React from "react";
import Button from "components/atom/Button";
import Input from "components/atom/Input";

export default function LoginForm() {
  const inputStyle = "w-full border-b-2 border-gray";
  return (
    <form className="flex flex-col w-30% ">
      <Input
        styleName={inputStyle}
        name="이메일 주소"
        placeholder="예) kream@kream.co.kr"
      />
      <Input styleName={inputStyle} name="비밀번호" />
      <Button
        styleName="bg-gray my-2 p-4 text-white rounded-xl "
        name="로그인"
      />
    </form>
  );
}
