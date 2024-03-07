/** @format */

import FooterBottom from "components/molecules/bottomFooter/FooterBottom";
import FooterTop from "components/molecules/bottomFooter/FooterTop";
import React from "react";

export default function BottomFooter() {
  return (
    <div className="w-full mt-10 p-5 border-t border-solid">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
