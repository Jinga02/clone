/** @format */

import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li>
      <img
        className="w-full"
        src={thumbnails.medium.url}
        alt={title}
        onClick={() => {
          navigate(`/detail/${video.id}`, { state: { video } });
        }}
      />
      <div>
        {/* npm install -D @tailwindcss/line-clamp
        tailwinds 줄 처리
         */}
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
