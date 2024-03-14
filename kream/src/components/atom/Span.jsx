/** @format */

import React from "react";

export default function Span({ name, styleName, click }) {
  return (
    <span className={styleName} onClick={click}>
      {name}
    </span>
  );
}
