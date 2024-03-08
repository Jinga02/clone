/** @format */

import BottomFooter from "components/organisms/footer/BottomFooter";
import MainFooter from "components/organisms/footer/MainFooter";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-20% px-20">
      <MainFooter />
      <BottomFooter />
    </div>
  );
}
