/** @format */

import React from "react";
import Button from "components/atom/Button";
import Input from "components/atom/Input";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const SpanStyle =
    "w-full h-20 pt-3 pb-3 flex flex-col border-b-2 border-gray ";
  const InputStyle = "py-2 pr-8 placeholder:text-sm";
  const navigate = useNavigate();

  return (
    <form className="w-full flex flex-col">
      <Input
        spanStyle={SpanStyle}
        inputStyle={InputStyle}
        name="이메일 주소"
        placeholder="예) kream@kream.co.kr"
      />
      <Input inputStyle={InputStyle} spanStyle={SpanStyle} name="비밀번호" />
      <Button
        styleName="w-full h-14 mt-5 bg-gray text-white rounded-xl "
        name="로그인"
        click={() => navigate("/style")}
      />
    </form>
  );
}
