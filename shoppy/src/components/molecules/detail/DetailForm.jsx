/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart } from "api/firebase";
import Button from "components/atom/Button";
import { useAuthContext } from "context/Authcontext";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function DetailForm() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { id, image, title, price, options } =
    location.state && location.state.product ? location.state.product : {};
  const { user } = useAuthContext();
  const userId = user && user.uid;
  const [selected, setSelected] = useState(options && options[0]);
  const handelSelecte = (e) => setSelected(e.target.value);

  const addCart = useMutation({
    mutationFn: ({ userId, product }) => addOrUpdateToCart(userId, product),
    onSuccess: () => queryClient.invalidateQueries([`carts/${userId}/${id}`]),
  });

  // const addCart = () => {
  // const product = {
  //   id,
  //   image,
  //   title,
  //   price,
  //   option: selected,
  //   quantity: 1,
  // };
  //   addOrUpdateToCart(userId, product);
  // };
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label className="text-red-400 font-bold" htmlFor="select">
          옵션
        </label>
        <select
          id="select"
          className="p-1 m-4 flex-1 border-2 border-dashed border-red-400"
          onChange={handelSelecte}
          value={selected}
        >
          {options &&
            options.map((option) => (
              <option key={uuid()} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
      <Button
        styleName="w-full py-2 mx-0 my-2 bg-red-400 text-white rounded-lg hover:brightness-110"
        onClick={() => {
          const newProduct = {
            id,
            image,
            title,
            price,
            option: selected,
            quantity: 1,
          };
          addCart.mutate({
            userId,
            product: newProduct,
          });
        }}
      >
        장바구니에 추가
      </Button>
    </div>
  );
}
