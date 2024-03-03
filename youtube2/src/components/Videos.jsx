import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Videos() {
  const [popularVideos, setPopularVideos] = useState();
  const getPopularVideos = async () => {
    const url = "https://youtube.googleapis.com/youtube/v3/videos";
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: "25",
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    };

    try {
      const response = await axios.get(url, { params });
      console.log(response.data.items);
      setPopularVideos(response.data.items);
      return null;
    } catch (error) {
      console.error("인기있는 영화 데이터 로드 중 에러 발생:", error);
      return null;
    }
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div>
      <ul>
        {popularVideos.map((video) => (
          <li>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
}
