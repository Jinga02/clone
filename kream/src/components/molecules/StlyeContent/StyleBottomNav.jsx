/** @format */

import Image from "components/atom/Image";
import React from "react";

export default function StyleBottomNav({ styles }) {
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
    <div className="w-full py-5 border-t border-b border-gray overflow-scroll whitespace-nowrap hide-scrollbar">
      <ul className="flex justify-around">
        {navList.map((nav) => (
          <li key={styles.id} className="flex flex-col items-center text-sm">
            <Image
              url="asset/icon/basic.png"
              styleName="w-24 h-24 rounded-full"
            />
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}
