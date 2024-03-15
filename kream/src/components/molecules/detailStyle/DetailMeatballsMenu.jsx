/** @format */

import Button from "components/atom/Button";
import React from "react";
import Modal from "utils/Modal";
import { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
const liStyle =
  "w-full h-1/2 text-red-400 font-bold border-b border-gray py-2 text-center flex justify-center items-center";

export default function DetailMeatballsMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenu = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <Button Icon={PiDotsThreeOutlineFill} click={handleMenu} />
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
