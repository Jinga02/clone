/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import StyleCard from "./StyleCard";

export default function StyleCards() {
  const [styles, setStyles] = useState([]);

  const getStyles = () => {
    axios
      .get("asset/style/styles.json")
      .then((res) => setStyles(res.data.styles));
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <div className="w-full h-full">
      <ul className="h-90% grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-2 overflow-y-scroll	">
        {styles.map((style) => (
          <StyleCard key={style.id} prop={style} />
        ))}
      </ul>
    </div>
  );
}
