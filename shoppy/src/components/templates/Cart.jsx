/** @format */

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "api/firebase";
import { useAuthContext } from "context/Authcontext";
import P from "components/atom/P";
import CartItem from "components/molecules/cart/CartItem";
import PriceCard from "components/organisms/cart/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "components/atom/Button";

const SHIPPING = 3000;

export default function Cart() {
  const { user } = useAuthContext();
  const uid = user.uid;
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["carts"], queryFn: () => getCart(uid) });

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  if (isLoading) return <h1>Loding...</h1>;

  return (
    <div>
      <h1>내 장바구니</h1>
      {!hasProducts && <P>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</P>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button styleName="bg-red-400 text-white w-full p-2 font-bold">
            주문하기
          </Button>
        </>
      )}
    </div>
  );
}
