/** @format */
import React from "react";

export default function Modal({ isOpen, children, backDropStyle, modalStyle }) {
  if (!isOpen) return null;

  return (
    <div className={`${backDropStyle} z-10`}>
      <div className={modalStyle}>{children}</div>
    </div>
  );
}
