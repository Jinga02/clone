/** @format */

import Input from "components/atom/Input";
import React from "react";
import AgreeForm from "./AgreeForm";
import Button from "components/atom/Button";
import { useNavigate } from "react-router-dom";

export default function SignForm() {
  const navigate = useNavigate();
  const inputStyle = "w-full border-b-2 border-gray py-3";
  return (
    <form className="w-96">
      <Input
        styleName={inputStyle}
        name="이메일 주소*"
        placeholder="예) kream@kream.co.kr"
      />
      <Input
        styleName={inputStyle}
        name="비밀번호*"
        placeholder="영문, 숫자, 특수문자 조합 8 - 16자"
      />
      <Input
        styleName={inputStyle}
        name="추천인 코드"
        placeholder="추천인 코드를 입력하세요"
      />
      <Input
        styleName={inputStyle}
        name="신발 사이즈"
        placeholder="선택하세요"
      />
      <AgreeForm />
      <Button
        styleName="w-full bg-gray my-2 p-4 text-white rounded-xl "
        name="가입하기"
        click={() => navigate("/style")}
      />
    </form>
  );
}
