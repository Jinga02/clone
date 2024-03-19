/** @format */

import React from "react";

export default function Button({ onClick, children, styleName }) {
  const defaultStyle = "mx-2";
  return (
    <button onClick={onClick} className={`${styleName} ${defaultStyle}`}>
      {children}
    </button>
  );
}
