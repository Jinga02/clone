/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../componets/VideoCard";
// import Youtube from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
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
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60,
    // 아래처럼 노출 시킬 필요 없이 context-api를 사용하자
    // 호출할 때 마다 매번 인스턴스 생성하는것도 비효율적
    // {
    // const youtube = new FakeYoutube();
    // return youtube.search(keyword);
    // },
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gris-cols-4
         2xl:grid-cols-5 gap-2 gap-y-4"
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
