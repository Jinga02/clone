/** @format */

import React from "react";

export default function Input({ setText, value, placeholder }) {
  return (
    <input
      onChange={(e) => setText(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}
