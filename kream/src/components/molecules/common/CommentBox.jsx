/** @format */

import Image from "components/atom/Image";
import Span from "components/atom/Span";
import React from "react";
import koLocale from "timeago.js/lib/lang/ko";
import { format, register } from "timeago.js";
import ImageButton from "components/atom/ImageButton";

register("ko", koLocale);

export default function CommentBox({ liStyle, comment }) {
  return (
    <li className={`${liStyle} flex items-center justify-between`}>
      <div className="flex">
        <Image url={comment.url} styleName="w-34px h-34px mr-4 rounded-full" />
        <div>
          <Span name={comment.nickname} styleName="mr-4 text-sm font-bold" />
          <Span name={comment.text} styleName="text-sm" />
          <div>
            <Span
              name={format(comment.createTime, "ko")}
              styleName="mr-4 opacity-40 text-xs"
            />
            <Span name="답글쓰기" styleName="opacity-50 font-bold text-xs" />
          </div>
        </div>
      </div>
      {comment.heart && (
        <div className="">
          <ImageButton
            imgUrl="asset/icon/heart.svg"
            styleName="w-8 h-8 opacity-40"
          />
        </div>
      )}
    </li>
  );
}
