/** @format */

import React from "react";
import Contact from "components/molecules/footer/Contact";
import CustomerSupport from "components/molecules/footer/CustomerSupport";
import Manual from "components/molecules/footer/Manual";

export default function MainFooter() {
  return (
    <div className="w-full max-w-[1280px] pb-14 border-m border-b border-solid border-gray">
      <div className="w-full h-full flex justify-between md:flex-col-reverse">
        <div className="flex md:mt-50px">
          <Manual />
          <CustomerSupport />
        </div>
        <Contact />
      </div>
    </div>
  );
}
