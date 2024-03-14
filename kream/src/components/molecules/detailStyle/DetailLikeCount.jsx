/** @format */

import Link from "components/atom/Link";
import React from "react";

export default function DetailLikeCount({ likeCount }) {
  return (
    <div className="w-full h-34px pt-12px bg-red-200">
      <Link url="/" name={`좋아요 ${likeCount}개`} />
    </div>
  );
}
