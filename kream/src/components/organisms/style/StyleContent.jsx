/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import StyleCards from "components/molecules/stlyeContent/StyleCards";
import StyleTitle from "components/molecules/stlyeContent/StyleTitle";
import StyleNav from "components/molecules/stlyeContent/StyleCategory";
import StyleShortCut from "components/molecules/stlyeContent/StyleShortCut";
import StyleSearchBar from "components/molecules/stlyeContent/StyleSearchBar";
import { useSelector } from "react-redux";

export default function StyleContent() {
  const styles = useSelector((state) => state.styleValue.styles);
  return (
    // <div className="w-full max-w-[1280px]">
    //   <StyleSearchBar />
    //   <StyleTitle />
    //   <StyleNav styles={styles} />
    <div className="w-full px-40px flex flex-col justify-center items-center">
      <StyleShortCut styles={styles} />
      <StyleCards styles={styles} />
    </div>
    // </div>
  );
}
