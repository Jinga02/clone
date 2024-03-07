/** @format */
import React from "react";

export default function Button({ name, Icon }) {
  return (
    <button className=" bg-transparent border-none m-1 mx-2">
      {Icon ? <Icon /> : name}
    </button>
  );
}
