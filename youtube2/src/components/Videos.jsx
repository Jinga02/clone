/** @format */

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useYoutubeApi } from "../context/YoutubeContextApi";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import { useQuery } from "@tanstack/react-query";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gris-cols-4
         2xl:grid-cols-5 gap-3 gap-y-2 mx-3"
      >
        {" "}
        {videos.map((video) => (
          <VideoCard key={uuid()} prop={video} />
        ))}
      </ul>
    </div>
  );
}
