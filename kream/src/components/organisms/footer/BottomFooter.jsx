/** @format */

import NoticeGuarantee from "components/molecules/footer/NoticeGuarantee";
import CorporationArea from "components/molecules/footer/CorporationArea";
import React from "react";
import NoticeArea from "components/molecules/footer/NoticeArea";

export default function BottomFooter() {
  return (
    <div className="w-full max-w-[1280px] mt-30px">
      <CorporationArea />
      <NoticeGuarantee />
      <NoticeArea />
    </div>
  );
}
