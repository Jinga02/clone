/** @format */

import BottomFooter from "components/organisms/footer/BottomFooter";
import MainFooter from "components/organisms/footer/MainFooter";
import React, { useEffect } from "react";
import { useRef } from "react";

export default function Footer({ setFooterHeight }) {
  const footerRef = useRef(null);

  useEffect(() => {
    setFooterHeight(footerRef.current.offsetHeight / 2);
  });

  return (
    <div className="w-full px-20 py-10 " ref={footerRef}>
      <MainFooter />
      <BottomFooter />
    </div>
  );
}
