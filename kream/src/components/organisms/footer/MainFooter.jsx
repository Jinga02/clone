/** @format */

import React from "react";
import Contact from "components/molecules/mainFooter/Contact";
import CustomerSupport from "components/molecules/mainFooter/CustomerSupport";
import Manual from "components/molecules/mainFooter/Manual";

export default function MainFooter() {
  return (
    <div className="w-full max-w-[1280px] pb-14 flex justify-between border-m border-b border-solid border-gray">
      <div className="flex">
        <Manual />
        <CustomerSupport />
      </div>
      <Contact />
    </div>
  );
}
