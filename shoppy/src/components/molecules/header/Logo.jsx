/** @format */

import Image from "components/atom/Image";
import Link from "components/atom/Link";
import P from "components/atom/P";
import React from "react";

export default function Logo() {
  return (
    <Link styleName="h-full flex justify-center items-center">
      <Image imgUrl="asset/logo.png" styleName="h-full" />
      <P styleName="text-red-500 text-xl font-semibold">Shoppy</P>
    </Link>
  );
}
