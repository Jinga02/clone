/** @format */

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeContextApi";
import VideoCard from "./VideoCard";
import uuid from "react-uuid";

export default function RelatedVideo({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.related(id),
    staleTime: 1000 * 60 * 5,
  });
  console.log(videos);
  if (isLoading) return "Loading...😅";
  if (error) return "An error has occurred: " + error.message;
  return (
    // <div>
    <ul className=" h-[700px] overflow-y-scroll scrollbar-hide">
      {" "}
      {videos.map((video) => (
        <VideoCard key={uuid()} prop={video} type="related" />
      ))}
    </ul>
    // </div>
  );
}
