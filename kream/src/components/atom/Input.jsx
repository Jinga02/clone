/** @format */

import React from "react";

export default function Input({ name, placeholder, spanStyle, inputStyle }) {
  const inputId = `${name}Input`;

  return (
    <span className={spanStyle}>
      {name && (
        <label htmlFor={inputId} className="font-bold ">
          {name}
        </label>
      )}
      <input
        className={inputStyle}
        type="text"
        id={inputId}
        placeholder={placeholder}
      ></input>
    </span>
  );
}
