/** @format */

import React from "react";
import koLocale from "timeago.js/lib/lang/ko";
import { format, register } from "timeago.js";
import Span from "components/atom/Span";
import ImageButton from "components/atom/ImageButton";

register("ko", koLocale);

export default function CommentHost({ profileImageUrl, nickname, createTime }) {
  console.log(profileImageUrl);
  return (
    <div className=" w-full h-56px px-24px pb-20px flex justify-start items-center">
      <div className="mr-3">
        <ImageButton imgStyle="w-9 h-9 rounded-full" imgUrl={profileImageUrl} />
      </div>
      <div>
        <div>
          <Span styleName="font-bold text-sm mr-3" name={nickname} />
          <Span name="태그" />
        </div>
        <div>
          <Span
            name={format(createTime, "ko")}
            styleName="opacity-40 text-sm"
          />
        </div>
      </div>
    </div>
  );
}
