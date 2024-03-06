/** @format */

import React from "react";

import Link from "components/atom/Link";
import Button from "components/atom/Button";

export default function TopHeader() {
  return (
    <div>
      <Link url="" name="고객센터" />
      <Link url="" name="마이페이지" />
      <Link url="" name="관심" />
      <Button name="알림" />
      <Button name="로그인" />
    </div>
  );
}
