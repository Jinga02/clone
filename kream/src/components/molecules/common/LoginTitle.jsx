/** @format */

import Title from "components/atom/Title";
import React from "react";

export default function LoginTitle({ name, subName }) {
  return (
    <div className="w-full h-84px pb-46px flex flex-col justify-center items-center ">
      <Title styleName=" text-3xl font-bold" name={name} />
      {subName && <Title styleName="text-sm font-bold" name={subName} />}
    </div>
  );
}
