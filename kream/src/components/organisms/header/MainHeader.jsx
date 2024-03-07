/** @format */

import Button from "components/atom/Button";
import React from "react";
import Link from "components/atom/Link";
import { IoSearch } from "react-icons/io5";

export default function MainHeader() {
  return (
    <div className="flex justify-between my-4">
      <div className="ml-14">
        <Link url="/style" name="KREAM" styleName="text-3xl font-bold" />
      </div>
      <div className="mr-12 text-xl">
        <Link url="/style" name="home" />
        <Link url="/style" name="stlye" />
        <Link url="/style" name="shop" />
        <Button Icon={IoSearch} />
      </div>
    </div>
  );
}
