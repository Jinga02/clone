/** @format */

import React from "react";
import Link from "components/atom/Link";
import { BsPencilFill } from "react-icons/bs";
import Button from "components/atom/Button";
import { login } from "api/firebase";

export default function Category() {
  return (
    <div className="flex items-center capitalize font-semibold">
      <Link linkUrl="/product" name="products" styleName="w-full h-100%" />
      <Link linkUrl="/carts" name="carts" styleName="w-full h-100%" />
      <Link linkUrl="/product/new" name="newProduct" styleName="w-full h-100%">
        <BsPencilFill />
      </Link>
      <Button onClick={login}>Login</Button>
    </div>
  );
}
