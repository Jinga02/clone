/** @format */

import P from "components/atom/P";
import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailContext() {
  const { title, price, description } = useLocation().state.product;
  return (
    <div className="">
      <P styleName="font-bold text-3xl ">{title}</P>
      <P styleName="py-1 font-bold text-2xl">{price}원</P>
      <P styleName="py-3 border-t font-semibold text-lg ">{description}</P>
    </div>
  );
}
