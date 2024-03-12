/** @format */

import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  spanStyle,
  inputStyle,
}) {
  const inputId = `${name}Input`;

  return (
    <>
      {type ? (
        <span className="flex justify-start items-center ">
          <input
            className={inputStyle}
            type={type}
            id={inputId}
            placeholder={placeholder}
          ></input>
          <label htmlFor={inputId} className="font-bold">
            {name}
          </label>
        </span>
      ) : (
        <span className={spanStyle}>
          <label htmlFor={inputId} className="font-bold">
            {name}
          </label>
          <input
            className={inputStyle}
            type="text"
            id={inputId}
            placeholder={placeholder}
          ></input>
        </span>
      )}
    </>
  );
}
