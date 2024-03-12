/** @format */

import React, { useState, useEffect, useRef } from "react";
import TopHeader from "components/organisms/header/TopHeader";
import MainHeader from "components/organisms/header/MainHeader";
import { useLocation } from "react-router-dom";

export default function Header({ setHeaderHeight }) {
  const headerRef = useRef(null);
  const location = useLocation();
  const path = location.pathname;

  // 경로에 "style"이나 "profile"이 포함되어 있는지 확인하는 함수
  const checkPathIncludes = () => {
    return path.includes("/style") || path.includes("/profile");
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeaderHeight(entry.target.offsetHeight);
      }
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
    };
  }, [setHeaderHeight]);

  return (
    <div
      ref={headerRef}
      className={`fixed w-full max-w-[1280px] h-pc_header_height z-3 bg-white ${
        checkPathIncludes() ? "md:hidden" : "lg:hidden"
      } left-1/2 transform -translate-x-1/2`}
    >
      <TopHeader />
      <MainHeader />
    </div>
  );
}
