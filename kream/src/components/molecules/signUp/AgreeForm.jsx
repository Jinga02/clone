/** @format */

import CheckBox from "components/atom/CheckBox";
import React from "react";

export default function AgreeForm() {
  return (
    <div>
      <CheckBox
        styleName="mr-3"
        type="checkbox"
        name="[필수] 만 14세 이상이며 모두 동의합니다."
        placeholder="선택하세요"
      />
      <CheckBox
        styleName="mr-3 "
        type="checkbox"
        name="[선택]광고성 정보 수신에 모두 동의합니다."
        placeholder="선택하세요"
      />
    </div>
  );
}
