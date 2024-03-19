/** @format */

import Image from "components/atom/Image";
import Link from "components/atom/Link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link styleName="">
        <Image imgUrl="asset/logo.png" />
      </Link>
    </header>
  );
}
