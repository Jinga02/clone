/** @format */

import React from "react";

export default function Link({ url, name, styleName }) {
  const defaultStyle = "p-1 px-3";

  return (
    <a className={styleName ? styleName : defaultStyle} href={url}>
      {name}
    </a>
  );
}
