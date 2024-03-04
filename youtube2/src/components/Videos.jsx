/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";

export default function Videos() {
  const [popularVideos, setPopularVideos] = useState([]);
  const movies = () => {
    if (popularVideos.length < 1) {
      axios
        .get("/videos/popular.json")
        .then((res) => setPopularVideos(res.data.items));
    }
  };
  // .then((res) => setPopularVideos(res));

  // const getPopularVideos = async () => {
  //   const url = "https://youtube.googleapis.com/youtube/v3/videos";
  //   const params = {
  //     part: "snippet",
  //     chart: "mostPopular",
  //     maxResults: "25",
  //     key: process.env.REACT_APP_YOUTUBE_API_KEY,
  //   };

  //   try {
  //     const response = await axios.get(url, { params });
  //     console.log(response.data.items);
  //     setPopularVideos(response.data.items);
  //     return null;
  //   } catch (error) {
  //     console.error("인기있는 영화 데이터 로드 중 에러 발생:", error);
  //     return null;
  //   }
  // };

  useEffect(() => {
    // getPopularVideos();
    movies();
  }, []);

  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gris-cols-4
         2xl:grid-cols-5 gap-3 gap-y-2 mx-3"
      >
        {" "}
        {popularVideos.map((video) => (
          <VideoCard key={video.id} prop={video} />
        ))}
      </ul>
    </div>
  );
}
