/** @format */

import StyleContent from "components/organisms/style/StyleContent";
import StyleHeader from "components/organisms/style/StyleHeader";
import React from "react";
import { useSelector } from "react-redux";

export default function StyleTemplates() {
  const styles = useSelector((state) => state.styleValue.styles);

  return (
    <div className="w-full max-w-[1280px]">
      <StyleHeader styles={styles} />
      <StyleContent styles={styles} />
    </div>
  );
}
