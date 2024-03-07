/** @format */

import React from "react";

export default function Link({ url, name, styleName }) {
  const defaultStyle = "m-1 mx-2";

  return (
    <a className={styleName ? styleName : defaultStyle} href={url}>
      {name}
    </a>
  );
}
