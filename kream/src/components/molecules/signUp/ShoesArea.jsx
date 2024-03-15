/** @format */

import LoginInput from "components/atom/LoginInput";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ShoesArea() {
  return (
    <div className="pt-18px flex items-center">
      <LoginInput
        name="신발 사이즈"
        placeholder="선택하세요"
        readOnly="readonly"
      />
      <span className="">
        <IoIosArrowForward />
      </span>
    </div>
  );
}
