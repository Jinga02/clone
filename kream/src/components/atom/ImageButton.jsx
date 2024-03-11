/** @format */

import React from "react";

export default function ImageButton({ name, styleName, imgUrl }) {
  const defaultStyle = "bg-transparent border-none p-1 px-2 flex items-center";

  return (
    <button className={styleName ? styleName : defaultStyle}>
      <img className="w-4 pr-2" src={imgUrl} alt="icon" />
      <span className="flex-grow">{name}</span>
    </button>
  );
}
