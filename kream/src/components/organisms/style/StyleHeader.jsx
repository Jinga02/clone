/** @format */

import StyleCategory from "components/molecules/stlyeContent/StyleCategory";
import StyleSearchBar from "components/molecules/stlyeContent/StyleSearchBar";
import StyleTitle from "components/molecules/stlyeContent/StyleTitle";
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
