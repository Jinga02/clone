/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, removeFromCart } from "api/firebase";

export default function useCarts({ uid, id }) {
  const queryClient = useQueryClient();

  const handleStatus = useMutation({
    mutationFn: ({ uid, product }) => addOrUpdateToCart(uid, product),
    onSuccess: () => queryClient.invalidateQueries([`carts/${uid}/${id}`]),
  });

  const removeCart = useMutation({
    mutationFn: ({ uid, id }) => removeFromCart(uid, id),
    onSuccess: () => queryClient.invalidateQueries([`carts/${uid}/${id}`]),
  });

  return { handleStatus, removeCart };
}
