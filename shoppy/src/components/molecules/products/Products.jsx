/** @format */

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/firebase";
import React from "react";
import ProductItem from "./ProductItem";
import useProducts from "hooks/useProducts";
import { v4 as uuid } from "uuid";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  // console.log(getProductss);

  return (
    <div className="w-full">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}{" "}
      {products && (
        <ul className=" grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4 ">
          {products.map((product) => (
            <ProductItem product={product} key={uuid()} />
          ))}
        </ul>
      )}
    </div>
  );
}
