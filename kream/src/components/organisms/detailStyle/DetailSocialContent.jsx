/** @format */

import React from "react";
import DetailButtons from "../../molecules/detailStyle/DetailButtons";
import DetailText from "../../molecules/detailStyle/DetailText";
import DetailComment from "../../molecules/detailStyle/DetailComment";
import DetailLikeCount from "../../molecules/detailStyle/DetailLikeCount";

export default function DetailSocialContent({
  profileImageUrl,
  nickname,
  likeCount,
  text,
  comments,
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
      <DetailComment comments={comments} />
    </div>
  );
}
