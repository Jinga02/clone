/** @format */

import React, { useEffect, useState } from "react";
import StyleCards from "components/molecules/stlye/StyleCards";
import StyleShortCut from "components/molecules/stlye/StyleShortCut";
import { useSelector } from "react-redux";

export default function StyleContent() {
  const styles = useSelector((state) => state.styleValue.styles);
  return (
    <div className="w-full px-40px flex flex-col justify-center items-center">
      <StyleShortCut styles={styles} />
      <StyleCards styles={styles} />
    </div>
  );
}
