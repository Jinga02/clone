/** @format */

import Image from "components/atom/Image";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StyleCard({ prop }) {
  const navigate = useNavigate();
  const { userId, nickname, styleImageUrl, profileImageUrl } = prop;
  // const [imageHeight, setImageHeight] = useState("100%");
  // const styleImageStyle = `w-full rounded-lg h-${imageHeight}`;
  // useEffect(() => {
  //   const heightOptions = ["100%", "110%", "120%"];
  //   const randomHeight =
  //     heightOptions[Math.floor(Math.random() * heightOptions.length)];
  //   setImageHeight(randomHeight);
  // }, []);
  const onClickStyleCard = () => {
    navigate(`/${userId}`);
  };
  return (
    <li className="p-3 py-5 cursor-pointer" onClick={() => onClickStyleCard()}>
      <Image
        // styleName={styleImageStyle}
        styleName="w-100% h-90% rounded-xl"
        url={styleImageUrl}
        alt="스타일 이미지"
      />
      <div className="flex items-center p-2">
        <Image
          styleName="w-6 h-6 rounded-xl mr-3"
          url={profileImageUrl}
          alt="프로필 이미지"
        />
        {nickname}
      </div>
    </li>
  );
}
