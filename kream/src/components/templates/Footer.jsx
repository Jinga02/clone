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
    <div
      className="w-full h-542px p-pc_footer flex flex-col justify-center items-center  border-t border-b border-solid border-gray"
      ref={footerRef}
    >
      <MainFooter />
      <BottomFooter />
    </div>
  );
}
