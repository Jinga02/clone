/** @format */

import React from "react";

export default function CheckBox({ styleName, name, placeholder, labelStyle }) {
  return (
    <span className="flex justify-start items-center ">
      <input
        className={styleName}
        type="checkbox"
        id="checkbox"
        placeholder={placeholder}
      ></input>
      <label className={labelStyle} htmlFor="checkbox">
        {name}
      </label>
    </span>
  );
}
