/** @format */

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function ChannelInfo({ prop }) {
  const { youtube } = useYoutubeApi();
  const channelId = prop.channelId;

  const {
    isLoading,
    error,
    data: channelImageUrl,
  } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: () => youtube.channel(channelId),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return "Loading...😅";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <img src={channelImageUrl} alt="썸네일" />
      {prop.channelTitle}
    </div>
  );
}
