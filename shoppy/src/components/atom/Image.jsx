/** @format */

import React from "react";

export default function Image({ imgUrl, alt, styleName }) {
  const defaultStyle = "mx-2";
  return (
    <img src={imgUrl} alt={alt} className={`${styleName} ${defaultStyle}`} />
  );
}
