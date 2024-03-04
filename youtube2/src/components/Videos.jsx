/** @format */

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useYoutubeApi } from "../context/YoutubeContextApi";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";

export default function Videos() {
  const [popularVideos, setPopularVideos] = useState([]);
  const { youtube } = useYoutubeApi();
  const { keyword } = useParams();

  useEffect(() => {
    youtube.search(keyword).then((res) => {
      setPopularVideos(res);
    });
  }, [keyword]);

  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gris-cols-4
         2xl:grid-cols-5 gap-3 gap-y-2 mx-3"
      >
        {" "}
        {popularVideos.map((video) => (
          <VideoCard key={uuid()} prop={video} />
        ))}
      </ul>
    </div>
  );
}
