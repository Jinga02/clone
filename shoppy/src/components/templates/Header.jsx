/** @format */

import Category from "components/molecules/header/Category";
import Logo from "components/molecules/header/Logo";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-6% px-4%  flex justify-between items-center border-b border-gray-100">
      <Logo />
      <Category />
    </div>
  );
}
