/** @format */

import React from "react";
import { format, register } from "timeago.js"; //임포트하기 register 한국어 선택
import { useNavigate } from "react-router-dom";
// import koLocale from "timeago.js/lib/lang/ko"; //한국어 선택

// register("ko", koLocale);

export default function VideoCard({ prop, type }) {
  const navigate = useNavigate();
  const video = prop.snippet;
  const id = prop.id.videoId ? prop.id.videoId : prop.id;

  console.log(type);
  return (
    <li
      className={type ? "p-2 cursor-pointer" : null}
      onClick={() => {
        navigate(`/detail/${id}`, {
          state: { prop },
        });
      }}
    >
      <img
        className="w-full mx-auto"
        src={video.thumbnails.default.url}
        alt="영상 썸네일"
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{video.title}</p>
        <p className="text-sm opacity-80">{video.channelTitle}</p>
        <p className="text-sm opacity-80">{format(video.publishedAt)}</p>
      </div>
    </li>
  );
}
