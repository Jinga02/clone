/** @format */

import Image from "components/atom/Image";
import P from "components/atom/P";
import React from "react";

export default function User({ user }) {
  return (
    <div className=" flex items-center">
      <Image
        styleName="w-10 h-10 rounded-full"
        imgUrl={user.photoURL}
        alt="유저 이미지"
      />
      <P styleName="hidden lg:block">{user.displayName}</P>
    </div>
  );
}
