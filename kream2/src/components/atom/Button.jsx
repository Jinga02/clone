/** @format */
import React from "react";

export default function Button({ name, icon }) {
  return <button className=" bg-none">{icon ? <icon /> : name}</button>;
}
