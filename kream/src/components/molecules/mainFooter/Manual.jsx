/** @format */

import Link from "components/atom/Link";
import Title from "components/atom/Title";
import React from "react";

export default function Manual() {
  const linkStyle = "text-sm opacity-40 mt-1";
  return (
    <div className="flex flex-col mx-10">
      <Title name="이용안내" styleName="font-bold text-base" />
      <Link styleName={linkStyle} url="" name="검수기준" />
      <Link styleName={linkStyle} url="" name="이용정책" />
      <Link styleName={linkStyle} url="" name="패널티 정책" />
      <Link styleName={linkStyle} url="" name="커뮤니티 가이드라인" />
    </div>
  );
}
