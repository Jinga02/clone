/** @format */

import CheckBox from "components/atom/CheckBox";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AgreeArea() {
  return (
    <div className="h-112px pb-40px">
      <div className="h-36px flex justify-between items-center">
        <CheckBox
          styleName="mr-3"
          type="checkbox"
          name="[필수] 만 14세 이상이며 모두 동의합니다."
          labelStyle="text-sm opacity-80"
        />
        <span className="flex justify-center items-center text-xl">
          <AiOutlinePlus />
        </span>
      </div>
      <div className="h-36px flex justify-between items-center">
        {" "}
        <CheckBox
          styleName="mr-3 "
          type="checkbox"
          name="[선택]광고성 정보 수신에 모두 동의합니다."
          labelStyle="text-sm opacity-80"
        />
        <span className="flex justify-center items-center text-xl">
          <AiOutlinePlus />
        </span>
      </div>
    </div>
  );
}
