/** @format */

import React from "react";
import StyleCard from "./StyleCard";

export default function StyleCards({ styles }) {
  return (
    <div>
      <ul className="grid grid-cols-4 md:grid-cols-2 gap-x-4">
        {styles.map((style) => (
          <StyleCard key={style.id} prop={style} />
        ))}
      </ul>
    </div>
  );
}
