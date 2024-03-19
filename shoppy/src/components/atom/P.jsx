/** @format */

import React from "react";

export default function P({ children, styleName }) {
  return <p className={styleName}>{children}</p>;
}
