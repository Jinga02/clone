/** @format */

import React from "react";
import { format, register } from "timeago.js"; //임포트하기 register 한국어 선택
import { useNavigate } from "react-router-dom";
// import koLocale from "timeago.js/lib/lang/ko"; //한국어 선택

// register("ko", koLocale);

export default function VideoCard({ prop }) {
  const navigate = useNavigate();
  const video = prop.snippet;
  return (
    <li
      onClick={() => {
        navigate(`/detail/${prop.id.videoId ? prop.id.videoId : prop.id}`, {
          state: { prop },
        });
      }}
    >
      <img
        className="w-full mx-auto"
        src={video.thumbnails.default.url}
        alt="영상 썸네일"
      />
      {/* <div className="flex flex-col items-center justify-center"> */}
      <div>
        <p className="font-semibold my-2 line-clamp-2">{video.title}</p>
        <p className="text-sm opacity-80">{video.channelTitle}</p>
        <p className="text-sm opacity-80">{format(video.publishedAt)}</p>
      </div>
    </li>
  );
}
