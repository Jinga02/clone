/** @format */

import React from "react";

export default function CheckBox({ styleName, name, placeholder }) {
  return (
    <span className="flex justify-start items-center ">
      <input
        className={styleName}
        type="checkbox"
        id="checkbox"
        placeholder={placeholder}
      ></input>
      <label htmlFor="checkbox" className="font-bold">
        {name}
      </label>
    </span>
  );
}
