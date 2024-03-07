/** @format */

import React from "react";
import Contact from "components/molecules/mainFooter/Contact";
import CustomerSupport from "components/molecules/mainFooter/CustomerSupport";
import Manual from "components/molecules/mainFooter/Manual";

export default function MainFooter() {
  return (
    <div className="w-full h-60% flex justify-between bg-red-200">
      <div className="flex">
        <Manual />
        <CustomerSupport />
      </div>
      <Contact />
    </div>
  );
}
