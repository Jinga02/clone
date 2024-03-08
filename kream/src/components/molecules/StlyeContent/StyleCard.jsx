/** @format */

import Image from "components/atom/Image";
import React from "react";

export default function StyleCard({ prop }) {
  const { id, nickname, url } = prop;

  return (
    <li className="w-full">
      <Image styleName="w-full" url={url} alt="스타일 이미지" />
      {nickname}
    </li>
  );
}
