/** @format */

import React from "react";
import Link from "components/atom/Link";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export default function DetailTitle({ createTime, nickname, profileImageUrl }) {
  return (
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
  );
}
