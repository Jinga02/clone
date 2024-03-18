/** @format */

import LoginInput from "components/atom/LoginInput";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "components/molecules/common/Modal";
import useModal from "hook/useModal";

export default function ShoesArea() {
  const { isOpen, openModal, closeModal } = useModal;
  const shoesSize = [];
  for (let i = 200; i < 305; i += 5) {
    shoesSize.push(i);
  }
  return (
    <>
      <div className="pt-18px flex items-center" onClick={() => openModal()}>
        <LoginInput
          name="신발 사이즈"
          placeholder="선택하세요"
          readOnly="readonly"
        />
        <span className="">
          <IoIosArrowForward />
        </span>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          modalStyle="w-448px h-426px bg-white rounded-2xl "
        >
          <ul className="grid grid-cols-3">
            {shoesSize.map((size) => (
              <li>{size}</li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}
