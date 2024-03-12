/** @format */

import FooterBottom from "components/molecules/bottomFooter/FooterBottom";
import FooterTop from "components/molecules/bottomFooter/FooterTop";
import React from "react";

export default function BottomFooter() {
  return (
    <div className="w-full max-w-[1280px] mt-30px">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
