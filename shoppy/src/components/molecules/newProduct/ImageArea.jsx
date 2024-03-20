/** @format */

import Image from "components/atom/Image";
import React from "react";

export default function ImageArea({ file }) {
  return (
    <div>
      <Image imgUrl={URL.createObjectURL(file)} />
    </div>
  );
}
