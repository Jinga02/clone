/** @format */

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getProducts as fetchProducts } from "api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery(
    { queryKey: ["products"], queryFn: fetchProducts },
    {
      staleTime: 1000 * 60,
    }
  );

  const { mutate: addProduct } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "products" });
    },
  });
  // const addProductMutation = useMutation(addNewProduct, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("products");
  //   },
  // });

  // const addProduct = async (newProductData) => {
  //   await addProductMutation.mutateAsync(newProductData);
  // };

  return { getProducts, addProduct };
}
