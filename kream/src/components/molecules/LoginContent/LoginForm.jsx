/** @format */

import React from "react";
import Button from "components/atom/Button";
import Input from "components/atom/Input";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const inputStyle = "w-full border-b-2 border-gray ";
  const navigate = useNavigate();

  return (
    <form className="flex flex-col w-96 ">
      <Input
        styleName={inputStyle}
        name="이메일 주소"
        placeholder="예) kream@kream.co.kr"
      />
      <Input styleName={inputStyle} name="비밀번호" />
      <Button
        styleName="bg-gray text-white rounded-xl "
        name="로그인"
        click={() => navigate("/style")}
      />
    </form>
  );
}
