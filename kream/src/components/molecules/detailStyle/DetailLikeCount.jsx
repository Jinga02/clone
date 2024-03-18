/** @format */

import React, { useRef } from "react";
import Title from "components/atom/Title";
import Modal from "components/molecules/common/Modal";
import Span from "components/atom/Span";
import Button from "components/atom/Button";
import useModal from "./../../../hook/useModal";
import useOnClickOutside from "hook/useOnClickOutside";

export default function DetailLikeCount({ likeCount }) {
  const ref = useRef();
  const { isOpen, openModal, closeModal } = useModal();
  useOnClickOutside(ref, closeModal);

  return (
    <div className="w-full h-34px pt-12px relative">
      <Span click={openModal} name={`좋아요 ${likeCount}개`} />
      {isOpen && (
        <Modal
          closeModal={closeModal}
          isOpen={isOpen}
          modalStyle="w-448px h-536px bg-white rounded-xl flex flex-col"
        >
          <div
            className="flex-1 flex flex-col justify-center items-center"
            ref={ref}
          >
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
