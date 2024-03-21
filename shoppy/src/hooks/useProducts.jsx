/** @format */

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "api/firebase";

export default function useProducts() {
  const queryCLient = useQueryClient();
  const productQuery = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60,
  });
}
