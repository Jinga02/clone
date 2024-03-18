/** @format */

import React, { useEffect } from "react";

export default function useOnClickOutside(ref, closeModal) {
  const handleClickOutside = (e) => {
    if (!ref.current || ref.current.contains(e.target)) return;
    closeModal();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeModal]);
}
