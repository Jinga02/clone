/** @format */

import React from "react";

export default function Input({ type, name, placeholder, styleName }) {
  const inputId = `${name}Input`;

  return (
    <>
      {type ? (
        <span className="flex justify-start items-center p-3">
          <input
            className={styleName}
            type={type}
            id={inputId}
            placeholder={placeholder}
          ></input>
          <label htmlFor={inputId} className="font-bold">
            {name}
          </label>
        </span>
      ) : (
        <span className="flex flex-col p-3">
          <label htmlFor={inputId} className="font-bold">
            {name}
          </label>
          <input
            className={styleName}
            type="text"
            id={inputId}
            placeholder={placeholder}
          ></input>
        </span>
      )}
    </>
  );
}
