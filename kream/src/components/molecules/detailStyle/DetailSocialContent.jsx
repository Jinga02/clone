/** @format */

import React from "react";
import DetailButtons from "./DetailButtons";
import DetailText from "./DetailText";
import DetailComment from "./DetailComment";
import DetailLikeCount from "./DetailLikeCount";

export default function DetailSocialContent({
  profileImageUrl,
  nickname,
  likeCount,
  text,
}) {
  return (
    <div className="w-full h-343px pt-12px">
      <DetailButtons />
      <DetailLikeCount
        profileImageUrl={profileImageUrl}
        nickname={nickname}
        likeCount={likeCount}
      />
      <DetailText text={text} />
      <DetailComment />
    </div>
  );
}
