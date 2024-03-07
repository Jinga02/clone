/** @format */

import Button from "components/atom/Button";
import React from "react";
import Link from "components/atom/Link";
import { IoSearch } from "react-icons/io5";

export default function MainHeader() {
  return (
    <div className="flex justify-between">
      <div className="ml-9">
        <Link url="/style" name="KREAM" styleName="text-2xl font-bold" />
      </div>
      <div className="mr-9 text-sm">
        <Link url="/style" name="HOME" />
        <Link url="/style" name="STLYE" />
        <Link url="/style" name="SHOP" />
        <Button Icon={IoSearch} name="SHOP" />
      </div>
    </div>
  );
}
