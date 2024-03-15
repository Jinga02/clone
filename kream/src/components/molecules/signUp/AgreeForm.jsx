/** @format */

import Input from "components/atom/Input";
import React from "react";

export default function AgreeForm() {
  return (
    <div>
      <Input
        styleName="mr-3"
        type="checkbox"
        name="[필수] 만 14세 이상이며 모두 동의합니다."
        placeholder="선택하세요"
      />
      <Input
        styleName="mr-3 "
        type="checkbox"
        name="[선택]광고성 정보 수신에 모두 동의합니다."
        placeholder="선택하세요"
      />
    </div>
  );
}
