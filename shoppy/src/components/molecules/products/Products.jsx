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
    <div className="w-full">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}{" "}
      {products && (
        <ul className=" grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4 ">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
