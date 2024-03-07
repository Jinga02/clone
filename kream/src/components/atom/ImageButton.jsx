/** @format */

import React from "react";

export default function ImageButton({ name, styleName, imgUrl }) {
  const defaultStyle = "bg-transparent border-none m-1 mx-2 flex items-center";

  return (
    <button className={styleName ? styleName : defaultStyle}>
      <img className="w-4 mr-2" src={imgUrl} alt="icon" />
      <span className="flex-grow">{name}</span>
    </button>
  );
}
