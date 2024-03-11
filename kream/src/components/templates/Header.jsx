/** @format */

import React, { useState, useEffect, useRef } from "react";
import TopHeader from "components/organisms/header/TopHeader";
import MainHeader from "components/organisms/header/MainHeader";

export default function Header({ setHeaderHeight }) {
  const headerRef = useRef(null);
  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight + 30);
  }, []);

  return (
    <div ref={headerRef} className="fixed w-full pt-2 z-50 bg-white">
      <TopHeader />
      <MainHeader />
    </div>
  );
}
