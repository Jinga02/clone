/** @format */

import Title from "components/atom/Title";
import React from "react";

export default function LoginTitle() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Title styleName=" text-4xl font-bold" name="kream" />
      <Title
        styleName="text-base font-bold"
        name="kicks rule everything around me"
      />
    </div>
  );
}
