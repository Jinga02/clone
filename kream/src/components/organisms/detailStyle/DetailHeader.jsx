/** @format */

import React from "react";
import DetailTitle from "./DetailTitle";
import DetailMeatballsMenu from "components/molecules/detailStyle/DetailMeatballsMenu";

export default function DetailHeader({
  createTime,
  nickname,
  profileImageUrl,
}) {
  return (
    <div className="w-full h-68px py-12px flex items-center justify-between ">
      <DetailTitle
        createTime={createTime}
        nickname={nickname}
        profileImageUrl={profileImageUrl}
      />
      <DetailMeatballsMenu />
    </div>
  );
}
