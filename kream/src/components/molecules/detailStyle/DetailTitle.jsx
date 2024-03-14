/** @format */

import React, { useState } from "react";
import Link from "components/atom/Link";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Button from "components/atom/Button";

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
    <div className="w-full h-44px flex items-center justify-between bg-red-100">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-360px h-184px flex flex-col justify-center items-center bg-white rounded-xl">
            <ul className="w-full h-2/3 ">
              {" "}
              <li className={liStyle}> 게시글 수정</li>
              <li className={liStyle}> 게시글 삭제</li>
            </ul>
            <Button
              styleName="w-full h-1/3 font-bold"
              name="취소"
              click={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const liStyle =
  "w-full h-1/2 text-red-400 font-bold border-b border-gray py-2 text-center flex justify-center items-center";
