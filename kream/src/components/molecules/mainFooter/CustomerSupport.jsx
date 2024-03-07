/** @format */

import React from "react";
import Link from "components/atom/Link";
import Title from "components/atom/Title";

export default function CustomerSupport() {
  const linkStyle = "text-sm opacity-50 mt-1";

  return (
    <div className="flex flex-col mx-20">
      <Title name="고객지원" styleName="font-bold text-base" />
      <Link styleName={linkStyle} url="" name="공지사항" />
      <Link styleName={linkStyle} url="" name="서비스 소개" />
      <Link styleName={linkStyle} url="" name="스토어 안내" />
      <Link styleName={linkStyle} url="" name="판매자 방문접수" />
    </div>
  );
}
