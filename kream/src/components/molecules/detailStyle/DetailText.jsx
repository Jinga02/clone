/** @format */

import Span from "components/atom/Span";
import React, { useState } from "react";

export default function DetailText({ text }) {
  const sentences = text.split("\n");
  const firstText = sentences.shift();
  const remainingText = sentences.join("\n");

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full pt-16px">
      <Span name={firstText} click={onClick} />
      {isOpen && <br />}
      {isOpen && <Span styleName="whitespace-pre-wrap" name={remainingText} />}
      {!isOpen && <Span styleName="" name="...더보기" click={onClick} />}
    </div>
  );
}
