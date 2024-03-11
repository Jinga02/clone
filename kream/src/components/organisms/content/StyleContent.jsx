/** @format */

import React from "react";
import StyleCards from "components/molecules/StlyeContent/StyleCards";
import StyleTitle from "components/molecules/StlyeContent/StyleTitle";
import StyleNav from "components/molecules/StlyeContent/StyleNav";

export default function StyleContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 ">
      <StyleTitle />
      <StyleNav />
      <StyleCards />
    </div>
  );
}
