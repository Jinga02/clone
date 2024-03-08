/** @format */

import React from "react";
import TopHeader from "components/organisms/header/TopHeader";
import MainHeader from "components/organisms/header/MainHeader";

export default function Header() {
  return (
    <div className="fixed w-full pt-2  z-50 bg-white">
      <TopHeader />
      <MainHeader />
    </div>
  );
}
