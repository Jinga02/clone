/** @format */

import Image from "components/atom/Image";
import React from "react";
import { useLocation } from "react-router-dom";

export default function StyleShortCut({ styles }) {
  const navList = [
    "챌린지",
    "급상승 스타일",
    "개강룩",
    "봄데일리",
    "스트릿스타일",
    "봄 핫트렌드",
    "새신발",
    "스타일 랭킹",
    "니트코디",
  ];
  return (
    <div className="w-full h-144px py-16px t border-b border-gray lg:border-0">
      <ul className="flex justify-around lg:justify-start">
        {navList.map((nav) => (
          <li
            key={nav}
            className="flex flex-col items-center text-xs text-opacity-40 "
          >
            <Image
              url="asset/icon/basic.png"
              styleName="w-16 h-16 mx-1 rounded-full"
            />
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}
