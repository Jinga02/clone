/** @format */

import DetailImages from "components/molecules/detailStyle/DetailImages";
import DetailSocialContent from "components/molecules/detailStyle/DetailSocialContent";
import DetailTitle from "components/molecules/detailStyle/DetailTitle";
import { useLocation } from "react-router-dom";
import React from "react";

export default function DetailStyleContent() {
  const location = useLocation();
  const { userId, createTime, nickname, profileImageUrl, styleImages } =
    location.state;

  return (
    <div className="w-720px px-40px">
      <DetailTitle
        createTime={createTime}
        nickname={nickname}
        profileImageUrl={profileImageUrl}
      />
      <DetailImages styleImages={styleImages} />
      <DetailSocialContent userId={userId} />
    </div>
  );
}
