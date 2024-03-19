/** @format */

import React from "react";
import Link from "components/atom/Link";

export default function Category() {
  return (
    <div className="flex items-center capitalize font-semibold">
      <Link linkUrl="/product" name="products" styleName="w-full h-100%" />
      <Link linkUrl="/carts" name="carts" styleName="w-full h-100%" />
      <Link linkUrl="/login" name="login" styleName="w-full h-100%" />
    </div>
  );
}
