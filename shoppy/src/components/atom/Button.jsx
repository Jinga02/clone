/** @format */

import React from "react";

export default function Button({ onClick, children, styleName }) {
  return <button onClick={onClick}>{children}</button>;
}
