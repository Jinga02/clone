/** @format */

import React, { useState, useRef, useEffect } from "react";
import Title from "components/atom/Title";
import Modal from "utils/Modal";
import Span from "components/atom/Span";
import Button from "components/atom/Button";

export default function DetailLikeCount({ likeCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenu = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-34px pt-12px relative">
      <Span click={handleMenu} name={`좋아요 ${likeCount}개`} />
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          isOpen={isModalOpen}
          modalStyle="w-448px h-536px bg-white rounded-xl flex flex-col"
        >
          <div className="flex-1 flex flex-col justify-center items-center">
            <Title name="좋아요" styleName="font-bold" />
            <ul>
              <li></li>
            </ul>
          </div>
          <Button styleName="font-bold" name="X" click={closeModal} />
        </Modal>
      )}
    </div>
  );
}
