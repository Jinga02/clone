/** @format */

import React from "react";

export default function ImageButton({ name, styleName, imgStyle, imgUrl }) {
  const defaultStyle = "bg-transparent border-none flex items-center";
  const defaultImage = "asset/icon/basic.png";
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = "asset/icon/basic.png";
  };
  return (
    <button className={styleName ? styleName : defaultStyle}>
      <img
        className={imgStyle}
        src={imgUrl ? imgUrl : defaultImage}
        onError={handleError}
        alt="icon"
      />
      {name && <span className="flex-grow">{name}</span>}
    </button>
  );
}
