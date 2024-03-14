/** @format */

import React from "react";

export default function Image({ url, styleName }) {
  const defaultImage = "asset/icon/basic.png";
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = "asset/icon/basic.png";
  };

  return (
    <img
      className={styleName ? styleName : "w-16 h-8"}
      src={url ? url : defaultImage}
      alt="이미지"
      onError={handleError}
    />
  );
}
