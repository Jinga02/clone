/** @format */

import DetailContext from "components/molecules/detail/DetailContext";
import DetailForm from "components/molecules/detail/DetailForm";
import React from "react";

export default function DetailDescription() {
  return (
    <div className="w-full basis-5/12 flex flex-col p-4">
      <DetailContext />
      <DetailForm />
    </div>
  );
}
