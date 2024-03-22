/** @format */

import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import useCarts from "hooks/useCarts";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-red-400 hover:scale-105 mx-1";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const { handleStatus, removeCart } = useCarts({ uid, id });

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>{price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare
            className={ICON_CLASS}
            onClick={() => {
              const updatedProduct = { ...product, quantity: quantity - 1 };
              handleStatus.mutate({ uid, product: updatedProduct });
            }}
          />
          <span>{quantity}</span>
          <AiOutlinePlusSquare
            className={ICON_CLASS}
            onClick={() => {
              const updateProduct = { ...product, quantity: quantity + 1 };
              handleStatus.mutate({ uid, product: updateProduct });
            }}
          />
          <RiDeleteBin5Fill
            className={ICON_CLASS}
            onClick={() => removeCart.mutate({ uid, id })}
          />
        </div>
      </div>
    </li>
  );
}
