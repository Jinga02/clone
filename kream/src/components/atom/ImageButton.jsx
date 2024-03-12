/** @format */

import React from "react";

export default function ImageButton({ name, styleName, imageStyle, imgUrl }) {
  const defaultStyle = "bg-transparent border-none p-1 px-2 flex items-center";

  return (
    <button className={styleName ? styleName : defaultStyle}>
      <img className={imageStyle} src={imgUrl} alt="icon" />
      <span className="flex-grow">{name}</span>
    </button>
  );
}
