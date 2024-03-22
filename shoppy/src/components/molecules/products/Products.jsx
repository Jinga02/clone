/** @format */

import React from "react";
import ProductItem from "./ProductItem";
import { v4 as uuid } from "uuid";
import useProducts from "hooks/useProducts";

export default function Products() {
  // hooks 처리해서 사용 안함
  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const { isLoading, error, products } = useProducts();

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
