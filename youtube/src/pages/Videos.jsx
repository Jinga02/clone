/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../componets/VideoCard";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
  const { keyword } = useParams();

  // api 폴더로 정리
  // const queryFn = async () => {
  // return
  //  axios
  //   .get(`/videos/${keyword ? "search" : "popular"}.json`)
  //   .then((res) => res.data.items);

  // fetch(`/videos/${keyword ? "search" : "popular"}.json`)
  // .then((res) => res.json())
  // .then((data) => data.items);
  // };

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
