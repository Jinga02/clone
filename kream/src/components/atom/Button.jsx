/** @format */
import React from "react";

export default function Button({ name, Icon, styleName, click, imageUrl }) {
  const defaultStlye = "bg-transparent border-none p-1 px-2";
  return (
    <button className={styleName ? styleName : defaultStlye} onClick={click}>
      {Icon ? <Icon /> : name}
      {imageUrl ? <img src={imageUrl} alt="이미지" /> : null}
    </button>
  );
}
