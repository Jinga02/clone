/** @format */

import DetailDescription from "components/organisms/detail/DetailDescription";
import DetailImage from "components/organisms/detail/DetailImage";
import React from "react";

export default function Detail() {
  return (
    <div className="py-6 flex flex-col lg:flex-row justify-between items-center ">
      <DetailImage />
      <DetailDescription />
    </div>
  );
}
