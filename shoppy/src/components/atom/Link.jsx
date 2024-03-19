/** @format */

import React from "react";

export default function Link({ linkURl, children, styleName }) {
  return <a href={linkURl}>{children}</a>;
}
