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
    <div className="w-full py-10 px-5%" ref={footerRef}>
      <MainFooter />
      <BottomFooter />
    </div>
  );
}
