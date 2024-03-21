/** @format */

import { useQuery } from "@tanstack/react-query";
import { getCart } from "api/firebase";
import { useAuthContext } from "context/Authcontext";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartStatus() {
  const { user } = useAuthContext();
  const uid = user.uid;
  const { data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });

  return (
    <div className="relative ">
      <FaShoppingCart className="text-4xl" />
      {products && (
        <p className="w-6 h-6 text-center bg-red-400 text-white rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
