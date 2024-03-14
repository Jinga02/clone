/** @format */

import React, { useState } from "react";
import Link from "components/atom/Link";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Button from "components/atom/Button";
import Modal from "utils/Modal";

register("ko", koLocale);

export default function DetailTitle({ createTime, nickname, profileImageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenu = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-68px py-12px flex items-center justify-between ">
      <div className="flex items-center">
        <Link
          styleName="w-44px h-44px rounded-full"
          url={"/"}
          imageUrl={profileImageUrl}
        />
        <div className="flex flex-col ml-3">
          <Link name={nickname} url={"/"} />
          <Link name={format(createTime, "ko")} url={"/"} />
        </div>
      </div>
      <div className="">
        <Button Icon={PiDotsThreeOutlineFill} click={handleMenu} />
      </div>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          isOpen={isModalOpen}
          modalStyle="w-360px h-184px flex flex-col justify-center items-center bg-white rounded-xl"
        >
          <ul className="w-full h-2/3 ">
            <li className={liStyle}> 게시글 수정</li>
            <li className={liStyle}> 게시글 삭제</li>
          </ul>
          <Button
            styleName="w-full h-1/3 font-bold"
            name="취소"
            click={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}

const liStyle =
  "w-full h-1/2 text-red-400 font-bold border-b border-gray py-2 text-center flex justify-center items-center";
