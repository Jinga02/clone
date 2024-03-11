/** @format */

import Button from "components/atom/Button";
import React from "react";
import Link from "components/atom/Link";
import { IoSearch } from "react-icons/io5";

export default function MainHeader() {
  return (
    <div className="p-pc_main_header h-pc_main_header_height flex justify-between py-4">
      <div className="pl-14">
        <Link url="/" name="KREAM" styleName="text-3xl font-bold" />
      </div>
      <div className="pr-12 text-xl">
        <Link url="/" name="home" />
        <Link url="/style" name="stlye" />
        <Link url="/style" name="shop" />
        <Button Icon={IoSearch} />
      </div>
    </div>
  );
}
