/** @format */

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/firebase";
import React from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return (
    <div className="">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}{" "}
      <ul className="w-800px mx-auto grid grid-cols-3">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
