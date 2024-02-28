/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../componets/ChannelInfo";
import RelatedVideos from "../componets/RelatedVideos";

export default function DetailVideo() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${video.id}}`}
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <RelatedVideos id={video.id} />
    </section>
  );
}
