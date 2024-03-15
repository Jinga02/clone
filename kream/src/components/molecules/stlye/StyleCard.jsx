/** @format */

import Image from "components/atom/Image";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function StyleCard({ prop }) {
  const navigate = useNavigate();
  const { userId, nickname, thumbnail, profileImageUrl } = prop;
  // const [imageHeight, setImageHeight] = useState("100%");
  // const styleImageStyle = `w-full rounded-lg h-${imageHeight}`;
  // useEffect(() => {
  //   const heightOptions = ["100%", "110%", "120%"];
  //   const randomHeight =
  //     heightOptions[Math.floor(Math.random() * heightOptions.length)];
  //   setImageHeight(randomHeight);
  // }, []);
  const onClickStyleCard = () => {
    navigate(`/${userId}`, { state: prop });
  };
  return (
    <li className="h-444px cursor-pointer" onClick={() => onClickStyleCard()}>
      <Image
        // styleName={styleImageStyle}
        styleName="h-80% rounded-xl"
        url={thumbnail}
        alt="스타일 이미지"
      />
      <div className="h-20% flex items-center">
        <Image
          styleName=" w-6 h-6 mr-2 rounded-full"
          url={profileImageUrl}
          alt="프로필 이미지"
        />
        {nickname}
      </div>
    </li>
  );
}
