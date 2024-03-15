/** @format */

import Button from "components/atom/Button";
import Link from "components/atom/Link";
import React from "react";
import { IoSearch } from "react-icons/io5";
export default function HeaderGnb() {
  const styleName = "mx-3";
  return (
    <div className="pr-12 text-xl">
      <Link styleName={styleName} url="/" name="home" />
      <Link styleName={styleName} url="/style" name="stlye" />
      <Link styleName={styleName} url="/style" name="shop" />
      <Button Icon={IoSearch} />
    </div>
  );
}
