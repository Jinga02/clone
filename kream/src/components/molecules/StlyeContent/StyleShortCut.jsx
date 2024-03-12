/** @format */

import Image from "components/atom/Image";
import React from "react";
import { useLocation } from "react-router-dom";

export default function StyleShortCut({ styles }) {
  const navList = [
    "캠코더챌린지",
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
    <div className="w-full h-144px py-16px border-t border-b border-gray ">
      <ul className="flex justify-around">
        {navList.map((nav) => (
          <li
            key={styles.id}
            className="flex flex-col items-center text-xs text-opacity-40 overflow-x-auto whitespace-nowrap hide-scrollbar"
          >
            <Image
              url="asset/icon/basic.png"
              styleName="w-80px h-80px rounded-full"
            />
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}
