/** @format */

import React from "react";
import HeaderLogo from "./../../molecules/header/HeaderLogo";
import HeaderGnb from "components/molecules/header/HeaderGnb";

export default function MainHeader() {
  return (
    <div className="p-pc_main_header h-pc_main_header_height flex justify-between item-center py-4">
      <HeaderLogo />
      <HeaderGnb />
    </div>
  );
}
