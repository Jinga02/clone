/** @format */

import Image from "components/atom/Image";
import P from "components/atom/P";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }) {
  const navigate = useNavigate();
  return (
    <li
      className="rounded-md shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
      onClick={() => {
        navigate(`/product/${product.id}`, { state: { product } });
      }}
    >
      <Image styleName="w-full" imgUrl={product.image} />
      <div className="mx-2 p-2 text-md flex justify-between ">
        <P styleName="truncate">{product.title}</P>
        <P>{product.price}원</P>
      </div>
      <P styleName="mx-2 p-2 text-gray-600">{product.category}</P>
    </li>
  );
}
