/** @format */

import Image from "components/atom/Image";
import P from "components/atom/P";
import React from "react";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <li className="my-3 px-2 shadow-md overflow-hidden">
      <Image imgUrl={product.image} />
      <div className="mx-2 p-2 text-md flex justify-between ">
        <P styleName="truncate">{product.title}</P>
        <P>{product.price}</P>
      </div>
      <P styleName="mx-2 p-2">{product.category}</P>
    </li>
  );
}
