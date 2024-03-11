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
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 ">
        {styles.map((style) => (
          <StyleCard key={style.id} prop={style} />
        ))}
      </ul>
    </div>
  );
}
