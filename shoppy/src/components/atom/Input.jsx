/** @format */

import React from "react";

export default function Input({
  type,
  onChange,
  styleName,
  name,
  value,
  placeholder,
}) {
  return (
    <>
      {type === "file" ? (
        <input
          type={type}
          accept="image/*"
          name={name}
          className={styleName}
          required
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          required
          onChange={onChange}
          name={name}
          className={styleName}
          value={value}
          placeholder={placeholder}
        />
      )}
    </>
  );
}
