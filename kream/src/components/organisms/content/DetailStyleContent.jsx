/** @format */

import DetailImages from "components/molecules/detailStyle/DetailImages";
import DetailSocialContent from "components/molecules/detailStyle/DetailSocialContent";
import DetailTitle from "components/molecules/detailStyle/DetailTitle";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export default function DetailStyleContent() {
  const param = useParams().userId;
  const styles = useSelector((state) => state.styleValue.styles);

  return (
    <div className="w-720px px-40px">
      <DetailTitle />
      <DetailImages />
      <DetailSocialContent />
    </div>
  );
}
