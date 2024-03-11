/** @format */

import React from "react";
import StyleTopNav from "./StyleTopNav";
import StyleBottomNav from "./StyleBottomNav";

export default function StyleNav({ styles }) {
  return (
    <div className="w-full">
      <StyleTopNav />
      <StyleBottomNav styles={styles} />
    </div>
  );
}
