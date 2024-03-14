/** @format */

import DetailImages from "components/molecules/detailStyle/DetailImages";
import DetailSocialContent from "components/molecules/detailStyle/DetailSocialContent";
import DetailTitle from "components/molecules/detailStyle/DetailTitle";
import { useLocation } from "react-router-dom";
import React from "react";

export default function DetailStyleContent() {
  const location = useLocation();
  const {
    // userId,
    text,
    createTime,
    nickname,
    likeCount,
    profileImageUrl,
    styleImages,
  } = location.state;
  console.log(text);
  return (
    <div className="w-720px px-40px">
      <DetailTitle
        createTime={createTime}
        nickname={nickname}
        profileImageUrl={profileImageUrl}
      />
      <DetailImages styleImages={styleImages} />
      <DetailSocialContent
        nickname={nickname}
        profileImageUrl={profileImageUrl}
        likeCount={likeCount}
        text={text}
      />
    </div>
  );
}
