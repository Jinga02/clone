/** @format */

import Button from "components/atom/Button";
import React from "react";

export default function DetailButtons() {
  return (
    <div className="w-full h-36px bg-red-100 flex justify-between">
      <div>
        <Button imageUrl="asset/icon/heart.svg" styleName={buttonStlye} />
        <Button imageUrl="asset/icon/chat.svg" styleName={buttonStlye} />
      </div>
      <div>
        <Button imageUrl="asset/icon/save.svg" styleName={buttonStlye} />
      </div>
    </div>
  );
}

const buttonStlye = "w-36px h-36px mx-4px";
