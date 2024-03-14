/** @format */

import React, { useEffect } from "react";

export default function Modal({ isOpen, closeModal, children, modalStyle }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={
            "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10"
          }
          onClick={closeModal}
        >
          <div className={modalStyle}>{children}</div>
        </div>
      )}
    </>
  );
}
