/** @format */

import Button from "components/atom/Button";
import Title from "components/atom/Title";
import React from "react";
import { TfiClose } from "react-icons/tfi";

export default function CommentTitle({ closeModal }) {
  return (
    <div className="h-82px flex justify-start items-center pr-56px pl-20px py-30px ">
      <Button
        click={closeModal}
        Icon={TfiClose}
        styleName="relative text-xl mr-2 "
      />
      <Title name="댓글" styleName="w-full font-bold text-xl" />
    </div>
  );
}
