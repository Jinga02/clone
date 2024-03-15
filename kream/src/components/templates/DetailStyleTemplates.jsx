/** @format */

import DetailContent from "components/organisms/detailStyle/DetailContent";
import DetailSocialContent from "components/organisms/detailStyle/DetailSocialContent";
import DetailTitle from "components/organisms/detailStyle/DetailTitle";
import { useLocation } from "react-router-dom";
import React from "react";
import DetailHeader from "components/organisms/detailStyle/DetailHeader";

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
    comments,
  } = location.state;
  console.log(createTime);
  return (
    <div className="w-720px px-40px">
      <DetailHeader
        createTime={createTime}
        nickname={nickname}
        profileImageUrl={profileImageUrl}
      />

      <DetailContent styleImages={styleImages} />
      <DetailSocialContent
        nickname={nickname}
        profileImageUrl={profileImageUrl}
        likeCount={likeCount}
        text={text}
        comments={comments}
      />
    </div>
  );
}
