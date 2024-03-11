/** @format */

import React, { useEffect, useState } from "react";
import StyleCards from "components/molecules/stlyeContent/StyleCards";
import StyleTitle from "components/molecules/stlyeContent/StyleTitle";
import StyleNav from "components/molecules/stlyeContent/StyleNav";
import axios from "axios";

export default function StyleContent() {
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
    <div className="w-full h-full flex flex-col items-center justify-center p-4 ">
      <StyleTitle />
      <StyleNav styles={styles} />
      <StyleCards styles={styles} />
    </div>
  );
}
