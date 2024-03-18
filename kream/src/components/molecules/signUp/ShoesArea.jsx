/** @format */

import LoginInput from "components/atom/LoginInput";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "components/molecules/common/Modal";
import useModal from "hook/useModal";
import Title from "components/atom/Title";
import Button from "components/atom/Button";

export default function ShoesArea() {
  const { isOpen, openModal, closeModal } = useModal();
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
          readOnly="readOnly"
        />
        <span className="">
          <IoIosArrowForward />
        </span>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          modalStyle="w-448px h-426px flex flex-col items-center bg-white rounded-2xl "
        >
          <Title
            name="사이즈 선택"
            styleName=" px-50px py-18px text-lg font-bold "
          />
          <ul className="w-full h-392px overflow-y-scroll grid grid-cols-3 gap-y-2 px-28px pt-6px">
            {shoesSize.map((size, index) => (
              <li
                className="w-120px h-52px px-18px border rounded-lg border-black border-opacity-30 font-semibold text-sm flex justify-center items-center"
                key={index}
              >
                {size}
              </li>
            ))}
          </ul>
          <div className="w-full px-32px pt-24px pb-32px flex justify-center ">
            <Button
              name="확인"
              styleName="w-120px h-40px px-18px opacity-20 border rounded-lg text-sm font-bold"
            />
          </div>
        </Modal>
      )}
    </>
  );
}
