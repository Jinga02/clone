/** @format */

import React from "react";
import StyleCard from "./StyleCard";

export default function StyleCards({ styles }) {
  return (
    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-2 ">
        {styles.map((style) => (
          <StyleCard key={style.id} prop={style} />
        ))}
      </ul>
    </div>
  );
}
