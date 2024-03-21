/** @format */

import Image from "components/atom/Image";
import React from "react";
import { useLocation } from "react-router-dom";
export default function DetailImage() {
  const { category, image } = useLocation().state.product;

  return (
    <div className="w-50%">
      <h1 className="mx-4 text-gray-700">{category}</h1>
      <Image imgUrl={image} styleName="w-full px-4 basis-7/12" />
    </div>
  );
}
