/** @format */

import React from "react";

export default function Link({ linkUrl, children, name, styleName }) {
  const defaultStyle = "mx-2";
  return (
    <a href={linkUrl} className={`${styleName} ${defaultStyle}`}>
      {children ? children : name}
    </a>
  );
}
