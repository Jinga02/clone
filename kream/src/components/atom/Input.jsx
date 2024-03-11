/** @format */
import React from "react";

export default function Input({ name, placeholder, styleName }) {
  return (
    <span className="flex flex-col py-3">
      <label for="inputName" className="font-bold">
        {name}
      </label>
      <input
        className={styleName}
        type="text"
        id="inputName"
        placeholder={placeholder}
      ></input>
    </span>
  );
}
