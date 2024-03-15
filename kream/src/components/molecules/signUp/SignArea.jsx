/** @format */

import LoginInput from "components/atom/LoginInput";
import React from "react";

export default function SignArea() {
  return (
    <div>
      <LoginInput name="이메일 주소*" placeholder="예) kream@kream.co.kr" />
      <LoginInput
        name="비밀번호*"
        placeholder="영문, 숫자, 특수문자 조합 8 - 16자"
      />
      <LoginInput name="추천인 코드" placeholder="추천인 코드를 입력하세요" />
    </div>
  );
}
