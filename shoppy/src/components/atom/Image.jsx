/** @format */

import React from "react";

export default function Image({ imgUrl, alt, styleName }) {
  return <img src={imgUrl} alt={alt} className={styleName} />;
}
