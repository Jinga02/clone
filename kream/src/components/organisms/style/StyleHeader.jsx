/** @format */

import StyleCategory from "components/molecules/stlye/StyleCategory";
import StyleSearchBar from "components/molecules/stlye/StyleSearchBar";
import StyleTitle from "components/molecules/stlye/StyleTitle";
import React from "react";

export default function StyleHeader({ styles }) {
  return (
    <>
      {" "}
      <StyleSearchBar />
      <StyleTitle />
      <StyleCategory styles={styles} />
    </>
  );
}
