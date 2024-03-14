/** @format */

import React from "react";
import DetailButtons from "./DetailButtons";
import DetailText from "./DetailText";
import DetailComment from "./DetailComment";
import DetailLikeCount from "./DetailLikeCount";

export default function DetailSocialContent({ likeCount }) {
  return (
    <div className="w-full h-343px pt-12px bg-red-50">
      <DetailButtons />
      <DetailLikeCount likeCount={likeCount} />
      <DetailText />
      <DetailComment />
    </div>
  );
}
