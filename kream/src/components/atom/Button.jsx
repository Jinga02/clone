/** @format */
import React from "react";

export default function Button({ name, Icon, styleName }) {
  const defaultStlye = "bg-transparent border-none m-1 mx-2";
  return (
    <button className={styleName ? styleName : defaultStlye}>
      {Icon ? <Icon /> : name}
    </button>
  );
}
