/** @format */

import React, { useState, useEffect, useRef } from "react";
import TopHeader from "components/organisms/header/TopHeader";
import MainHeader from "components/organisms/header/MainHeader";

export default function Header({ setHeaderHeight }) {
  const headerRef = useRef(null);
  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed w-full max-w-[1280px] h-pc_header_height z-3 bg-white lg:hidden left-1/2 transform -translate-x-1/2"
    >
      <TopHeader />
      <MainHeader />
    </div>
  );
}
