/** @format */

import React from "react";
import StyleCard from "./StyleCard";

export default function StyleCards({ styles }) {
  return (
    <div className="w-full">
      <ul className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4">
        {styles.map((style) => (
          <StyleCard key={style.nickname} prop={style} />
        ))}
      </ul>
    </div>
  );
}
