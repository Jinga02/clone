/** @format */

import React from "react";
import Link from "components/atom/Link";

export default function StyleTopNav() {
  const navList = [
    "KICKS",
    "팔로잉",
    "발견",
    "랭킹",
    "트렌드",
    "봄캐주얼",
    "스니커즈",
    "럭셔리",
    "의류",
    "가방",
    "셀럽스타일",
    "컬렉터블",
    "액세서리",
  ];
  return (
    <div className="w-full flex justify-start py-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
      {navList.map((nav) => (
        <Link name={nav} styleName="px-3 cursor-pointer text-sm" />
      ))}
    </div>
  );
}
