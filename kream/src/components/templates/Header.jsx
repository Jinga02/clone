/** @format */

import React from "react";
import TopHeader from "components/organisms/header/TopHeader";
import MainHeader from "components/organisms/header/MainHeader";

export default function Header() {
  return (
    <div className="w-full h-10% pt-2 fixed z-50 bg-white">
      <TopHeader />
      <MainHeader />
    </div>
  );
}
