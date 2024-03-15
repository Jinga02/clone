/** @format */

import React from "react";
import Input from "./Input";

export default function LoginInput({ name, placeholder, readOnly }) {
  const InputStyle =
    "pt-10px pb-8px border-b-2 border-gray placeholder:text-sm placeholder:opacity-60";
  return (
    <div className="flex flex-col w-full h-92px pb-32px">
      {name && (
        <label htmlFor="loginInput" className="text-sm font-bold ">
          {name}
        </label>
      )}
      <input
        className={InputStyle}
        type="text"
        id="loginInput"
        placeholder={placeholder}
        readOnly={readOnly}
      ></input>
    </div>
  );
}
