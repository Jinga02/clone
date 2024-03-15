/** @format */

import Input from "components/atom/Input";
import React from "react";

export default function StyleSearchBar() {
  return (
    <div className="hidden md:block px-16px py-8px h-60px">
      <form className="w-full h-44px flex justify-start items-center">
        <Input
          placeholder="브랜드, 상품, 프로필, 태그 등"
          spanStyle="w-full"
          inputStyle="w-full bg-gray h-44px rounded-xl px-3"
        />
      </form>
    </div>
  );
}
