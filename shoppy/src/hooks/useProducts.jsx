/** @format */

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getProducts as fetchProducts } from "api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "products" });
    },
  });

  return { isLoading, error, products, addProduct };
}
