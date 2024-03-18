/** @format */

import useOnClickOutside from "hook/useOnClickOutside";
import React, { useEffect, useRef } from "react";
import lockBodyScroll from "utils/lockBodyScroll";

export default function Modal({ isOpen, closeModal, children, modalStyle }) {
  const ref = useRef();

  useOnClickOutside(ref, closeModal);

  useEffect(() => {
    lockBodyScroll(isOpen);
    return () => {
      lockBodyScroll(false);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={
            "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10 "
          }
        >
          <div className={modalStyle} ref={ref}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
